import { ChangeEvent, useState } from "react";
import { useMutation } from "@apollo/client";
import { toast } from "react-toastify";
import { SEND_MESSAGE } from "../graphql/mutations/message.mutation";

const initialMessage = {
  userName: "",
  email: "",
  phone: "",
  location: "",
  plan: "",
  content: "",
};

const GetInTouch = () => {
  const [sendMessage, setSendMessage] = useState(initialMessage);

  const [createMessage] = useMutation(SEND_MESSAGE);

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = event.target.name;
    setSendMessage({
      ...sendMessage,
      [name]: event.target.value,
    });
  };

  const onSubmitMessage = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const { data } = await createMessage({
        variables: {
          createMessageDto: sendMessage,
        },
      });
      if (data) {
        setSendMessage(initialMessage);
        return toast.success("Message sent successfully!");
      }
    } catch (err) {
      toast.error(
        err instanceof Error ? "Something went wrong" : "Failed to send message"
      );
    }
  };

  return (
    <div className="relative">
      <img
        src="https://plus.unsplash.com/premium_photo-1675842663249-a8b70103dbaa?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 object-cover w-full h-full"
        alt="Header Background"
      />
      <div className="relative bg-gray-900 bg-opacity-75">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#80a6c5] via-[#88ccdd] to-[#0868b8] sm:text-[70px] sm:leading-tight">
                Accelerating Your Digital Transformation Journey
              </h2>

              <p className="max-w-xl mb-4 text-lg text-gray-50">
                Leverage cutting-edge technologies to streamline your business
                processes, enhance customer experiences, and drive long-term
                success. Let us help you unlock new opportunities and stay ahead
                of the competition.
              </p>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                <h2 className="mb-4 text-xl font-semibold uppercase sm:text-center sm:mb-6 sm:text-2xl">
                  Get in Touch with Us
                </h2>
                <form onSubmit={onSubmitMessage}>
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="name"
                      className="inline-block mb-1 font-medium"
                    >
                      Name
                    </label>
                    <input
                      placeholder="Enter your name"
                      required
                      type="text"
                      name="userName"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      value={sendMessage.userName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Email
                    </label>
                    <input
                      placeholder="demo@gmail.com"
                      required
                      type="text"
                      name="email"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      value={sendMessage.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="mobile"
                      className="inline-block mb-1 font-medium"
                    >
                      Mobile
                    </label>
                    <input
                      placeholder="836736823"
                      required
                      type="tel"
                      name="phone"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      value={sendMessage.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="location"
                      className="inline-block mb-1 font-medium"
                    >
                      Location
                    </label>
                    <input
                      placeholder="Dhaka, Bangladesh"
                      required
                      type="text"
                      name="location"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      value={sendMessage.location}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="plan"
                      className="inline-block mb-1 font-medium"
                    >
                      Select Your Plan
                    </label>
                    <select
                      required
                      name="plan"
                      value={sendMessage.plan}
                      onChange={handleChange}
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-blue-500 focus:outline-none focus:shadow-outline"
                    >
                      <option value="">Choose a service plan</option>
                      <option value="startup plan">
                        Startup Website Development
                      </option>
                      <option value="ecommerce platform">
                        E-Commerce Platform
                      </option>
                      <option value="custom web application">
                        Custom Web Application
                      </option>
                      <option value="mobile app development">
                        Mobile App Development
                      </option>
                      <option value="real estate solution">
                        Real Estate BuildingSolution
                      </option>
                      <option value="hospital management system">
                        Hospital Management System
                      </option>
                      <option value="payment gateway integration">
                        Payment Gateway Integration
                      </option>
                      <option value="cloud migration & devops">
                        Cloud Migration & DevOps
                      </option>
                      <option value="enterprise solution">
                        Enterprise Solution
                      </option>
                      <option value="custom request">
                        Custom / Other Request
                      </option>
                    </select>
                  </div>

                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="follow_up"
                      className="inline-block mb-1 font-medium"
                    >
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Enter your message here..."
                      className="flex-grow w-full px-4 py-2 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      name="content"
                      value={sendMessage.content}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <div className="mt-4 mb-2 sm:mb-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#111E40] hover:bg-[#3a5bad] focus:shadow-outline focus:outline-none"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
