import { Helmet } from "react-helmet";
import { DynamicPageTitleProps } from "../interface/landing.interface";

const DynamicPageTitle = ({
	pageTitle,
	pageContent,
	pageURL,
}: DynamicPageTitleProps) => {
	return (
		<>
			<Helmet>
				<title>
					{pageTitle} | {pageContent}
				</title>
				<link rel="canonical" href={pageURL} />
				<meta name="description" content={pageContent} />
			</Helmet>
		</>
	);
};

export default DynamicPageTitle;
