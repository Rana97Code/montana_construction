import { useState } from "react";
import { Form, Input, Select, Button, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import axios from "axios"; // To handle file uploads to Cloudinary
import { RcFile, UploadFile } from "antd/lib/upload/interface"; // Import correct types
import { CREATE_RESUME } from "../graphql/mutations/career.mutations";

const { Option } = Select;
const { TextArea } = Input;

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  jobTitle: string;
  portfolioUrl: string;
  linkedInUrl: string;
  yearsOfExperience: string;
  skills: string[];
  coverLetter: string;
  address: string; // Added address field here
}

const ApplyJob = () => {
  const [form] = Form.useForm();
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [createResume] = useMutation(CREATE_RESUME);

  const onFinish = async (values: FormData) => {
    if (resumeFile) {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", resumeFile);
      formData.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);
      formData.append("cloud_name", import.meta.env.VITE_CLOUD_NAME);

      try {
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${
            import.meta.env.VITE_CLOUD_NAME
          }/upload`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
            onUploadProgress: (event) => {
              if (event.total) {
                const percent = Math.round((event.loaded / event.total) * 100);
                setProgress(percent);
              }
            },
          }
        );

        const resumeUrl = response.data.secure_url;
        const resumeData = {
          ...values,
          resumeFile: resumeUrl,
        };

        // Call the GraphQL mutation to create the resume
        await createResume({
          variables: {
            createResumeInput: {
              name: resumeData.fullName,
              phone: resumeData.phone,
              email: resumeData.email,
              address: resumeData.address, // Pass the address
              position: resumeData.jobTitle,
              coverLetter: resumeData.coverLetter,
              resumeFile: resumeData.resumeFile,
              portfolio: resumeData.portfolioUrl,
              linkedInUrl: resumeData.linkedInUrl,
              yearsOfExperience: resumeData.yearsOfExperience,
              keySkills: resumeData.skills,
            },
          },
        });

        // Success message
        message.success("Your application has been submitted successfully!");

        form.resetFields();
        setResumeFile(null);
        setProgress(0);
        setUploading(false);
      } catch (error) {
        console.error("Error uploading resume:", error);
        message.error("Failed to upload resume.");
        setUploading(false);
      }
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
    message.error("Please complete all required fields correctly.");
  };

  const uploadProps = {
    name: "resume",
    multiple: false,
    maxCount: 1,
    accept: ".pdf,.doc,.docx",
    beforeUpload: (file: RcFile) => {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("Resume must be smaller than 2MB!");
        return Upload.LIST_IGNORE;
      }
      const isAcceptedType = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ].includes(file.type);
      if (!isAcceptedType) {
        message.error("You can only upload PDF, DOC, or DOCX files!");
        return Upload.LIST_IGNORE;
      }
      setResumeFile(file);
      return false;
    },
    onRemove: () => {
      setResumeFile(null);
      setProgress(0);
    },
    fileList: resumeFile
      ? [
          {
            uid: "1",
            name: resumeFile.name,
            status: uploading ? "uploading" : "done", // Status should be one of 'uploading', 'done', 'error'
            progress: progress,
            size: resumeFile.size,
            type: resumeFile.type,
          } as UploadFile, // Explicitly cast to UploadFile type
        ]
      : [],
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-blue-50 to-indigo-100 sm:p-8 font-inter">
      <div className="w-full max-w-3xl p-6 transition-all duration-300 transform bg-white border border-blue-100 shadow-2xl sm:p-10 rounded-3xl hover:shadow-3xl">
        <div className="mb-10 text-center">
          <h2 className="mb-5 text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl">
            Join Our <span className="text-[#3689ce]">Team</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-gray-600">
            We're always looking for talented individuals to contribute to our
            innovative projects. Fill out the form below to apply.
          </p>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div className="p-6 border border-blue-100 md:col-span-2 bg-blue-50 rounded-xl">
            <h3 className="flex items-center mb-4 text-2xl font-bold text-blue-800">
              <svg
                className="w-6 h-6 mr-2 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Personal Information
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Form.Item
                name="fullName"
                label={<span className="text-gray-700">Full Name</span>}
                rules={[
                  { required: true, message: "Please enter your full name!" },
                ]}
                className="mb-0"
              >
                <Input
                  placeholder="John Doe"
                  className="px-4 py-2 text-gray-800 rounded-lg"
                />
              </Form.Item>
              <Form.Item
                name="email"
                label={<span className="text-gray-700">Email Address</span>}
                rules={[
                  {
                    required: true,
                    message: "Please enter your email address!",
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email address!",
                  },
                ]}
                className="mb-0"
              >
                <Input
                  placeholder="john.doe@example.com"
                  className="px-4 py-2 text-gray-800 rounded-lg"
                />
              </Form.Item>
              <Form.Item
                name="jobTitle"
                label={
                  <span className="text-gray-700">
                    Applying For (Job Title)
                  </span>
                }
                rules={[
                  { required: true, message: "Please select a job title!" },
                ]}
                className="mb-0 sm:col-span-2"
              >
                <Select
                  placeholder="Select a job title..."
                  className="w-full h-10 text-gray-800 rounded-lg ant-select-custom"
                >
                  <Option value="BuildingEngineer">BuildingEngineer</Option>
                  <Option value="Frontend Developer">Frontend Developer</Option>
                  <Option value="Backend Developer">Backend Developer</Option>
                  <Option value="Fullstack Developer">
                    Fullstack Developer
                  </Option>
                  <Option value="UI/UX Designer">UI/UX Designer</Option>
                  <Option value="Project Manager">Project Manager</Option>
                  <Option value="QA Engineer">QA Engineer</Option>
                  <Option value="DevOps Engineer">DevOps Engineer</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="phone"
                label={<span className="text-gray-700">Phone Number</span>}
                className="mb-0 sm:col-span-2"
                rules={[
                  {
                    pattern: /^\+?[0-9\s-()]{7,20}$/,
                    message: "Please enter a valid phone number!",
                  },
                ]}
              >
                <Input
                  placeholder="+1 234 567 8900"
                  className="px-4 py-2 text-gray-800 rounded-lg"
                />
              </Form.Item>
              <Form.Item
                name="address"
                label={<span className="text-gray-700">Address</span>}
                rules={[
                  { required: true, message: "Please enter your address!" },
                ]}
                className="mb-0 sm:col-span-2"
              >
                <Input
                  placeholder="123 Main St, Springfield, IL"
                  className="px-4 py-2 text-gray-800 rounded-lg"
                />
              </Form.Item>
            </div>
          </div>

          <div className="p-6 border border-indigo-100 md:col-span-2 bg-indigo-50 rounded-xl">
            <h3 className="flex items-center mb-4 text-2xl font-bold text-indigo-800">
              <svg
                className="w-6 h-6 mr-2 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-.758l-.688-.688m4.409-4.409l.688.688m-5.656-5.656a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101"
                />
              </svg>
              Online Presence
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Form.Item
                name="portfolioUrl"
                label={
                  <span className="text-gray-700">Portfolio/Website URL</span>
                }
                rules={[{ type: "url", message: "Please enter a valid URL!" }]}
                className="mb-0"
              >
                <Input
                  placeholder="https://yourportfolio.com"
                  className="px-4 py-2 text-gray-800 rounded-lg"
                />
              </Form.Item>
              <Form.Item
                name="linkedInUrl"
                label={
                  <span className="text-gray-700">LinkedIn Profile URL</span>
                }
                rules={[{ type: "url", message: "Please enter a valid URL!" }]}
                className="mb-0"
              >
                <Input
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="px-4 py-2 text-gray-800 rounded-lg"
                />
              </Form.Item>
            </div>
          </div>

          <div className="p-6 border border-purple-100 md:col-span-2 bg-purple-50 rounded-xl">
            <h3 className="flex items-center mb-4 text-2xl font-bold text-purple-800">
              <svg
                className="w-6 h-6 mr-2 text-purple-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Experience & Skills
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Form.Item
                name="yearsOfExperience"
                label={
                  <span className="text-gray-700">Years of Experience</span>
                }
                rules={[
                  {
                    required: true,
                    message: "Please select your years of experience!",
                  },
                ]}
                className="mb-0"
              >
                <Select
                  placeholder="Select..."
                  className="w-full h-10 text-gray-800 rounded-lg ant-select-custom"
                >
                  <Option value="0-1">0-1 Year</Option>
                  <Option value="1-3">1-3 Years</Option>
                  <Option value="3-5">3-5 Years</Option>
                  <Option value="5-10">5-10 Years</Option>
                  <Option value="10+">10+ Years</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="skills"
                label={<span className="text-gray-700">Key Skills</span>}
                className="mb-0"
              >
                <Select
                  mode="multiple"
                  placeholder="Select skills..."
                  className="w-full h-24 text-gray-800 rounded-lg ant-select-multiple-custom"
                >
                  <Option value="React">React</Option>
                  <Option value="Node.js">Node.js</Option>
                  <Option value="TypeScript">TypeScript</Option>
                  <Option value="Python">Python</Option>
                  <Option value="AWS">AWS</Option>
                  <Option value="Azure">Azure</Option>
                  <Option value="UI/UX Design">UI/UX Design</Option>
                  <Option value="Project Management">Project Management</Option>
                </Select>
              </Form.Item>
            </div>
          </div>

          <div className="p-6 border border-green-100 md:col-span-2 bg-green-50 rounded-xl">
            <h3 className="flex items-center mb-4 text-2xl font-bold text-green-800">
              <svg
                className="w-6 h-6 mr-2 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Documents
            </h3>
            <Form.Item
              name="resume"
              label={
                <span className="text-gray-700">
                  Upload Resume (PDF, DOC, DOCX, Max 2MB)
                </span>
              }
              valuePropName="fileList"
              getValueFromEvent={(e) => {
                if (Array.isArray(e)) {
                  return e;
                }
                return e?.fileList;
              }}
              rules={[
                { required: true, message: "Please upload your resume!" },
              ]}
              className="mb-4"
            >
              <Upload {...uploadProps}>
                <Button
                  className="ant-upload-btn-custom"
                  icon={<UploadOutlined />}
                >
                  Click to Upload
                </Button>
              </Upload>
              {uploading && <div>Uploading: {progress}%</div>}
            </Form.Item>

            <Form.Item
              name="coverLetter"
              label={<span className="text-gray-700">Cover Letter</span>}
              className="mb-0"
            >
              <TextArea
                rows={5}
                placeholder="Tell us about yourself and why you're a great fit for this role..."
                className="px-4 py-2 text-gray-800 rounded-lg"
              />
            </Form.Item>
          </div>

          <div className="mt-6 text-center md:col-span-2">
            <Button
              type="primary"
              htmlType="submit"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-bold rounded-full shadow-xl text-white bg-gradient-to-r from-[#3689ce] to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 transform hover:scale-105 active:scale-95 ant-btn-custom"
            >
              <svg
                className="w-6 h-6 mr-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 19l-7-7 7-7m5 7H12"
                />
              </svg>
              Submit Application
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ApplyJob;
