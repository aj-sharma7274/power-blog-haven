
import { BlogPost } from "@/components/BlogCard";
import { TechItem } from "@/components/TechCard";

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "Getting Started with Power Apps: A Beginner's Guide",
    excerpt: "Learn the basics of Microsoft Power Apps and how to create your first application without writing a single line of code.",
    date: "May 15, 2023",
    author: "Jane Smith",
    category: "Power Apps",
    views: 1250,
    imageUrl: "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/media/get-started-test-drive/sign-in.png",
  },
  {
    id: "2",
    title: "Automating Business Processes with Power Automate",
    excerpt: "Discover how to create time-saving workflows that automate repetitive tasks across your favorite apps and services.",
    date: "June 2, 2023",
    author: "John Doe",
    category: "Power Automate",
    views: 980,
    imageUrl: "https://learn.microsoft.com/en-us/power-automate/media/getting-started/sign-in-portal.png",
  },
  {
    id: "3",
    title: "Building Interactive Dashboards with Power BI",
    excerpt: "Transform your data into rich visuals to gather insights and make better business decisions with Power BI's suite of tools.",
    date: "June 20, 2023",
    author: "Michael Brown",
    category: "Power BI",
    views: 1560,
    imageUrl: "https://learn.microsoft.com/en-us/power-bi/fundamentals/media/service-get-started/power-bi-service-home-page.png",
  },
  {
    id: "4",
    title: "Creating Dynamic Websites with Power Pages",
    excerpt: "Learn how to build professional websites with built-in security and customization options using Microsoft Power Pages.",
    date: "July 5, 2023",
    author: "Linda Johnson",
    category: "Power Pages",
    views: 830,
    imageUrl: "https://learn.microsoft.com/en-us/power-pages/media/overview/power-pages-overview.png",
  },
  {
    id: "5",
    title: "Using Dataverse for Efficient Data Management",
    excerpt: "Explore how to leverage Microsoft Dataverse as a secure and scalable data source for your Power Platform applications.",
    date: "July 18, 2023",
    author: "Robert Wilson",
    category: "Dataverse",
    views: 720,
    imageUrl: "https://learn.microsoft.com/en-us/power-platform/admin/media/create-environment/create-environment-wizard.png",
  },
  {
    id: "6",
    title: "Advanced Techniques in Power Apps Canvas Apps",
    excerpt: "Take your Power Apps skills to the next level with these advanced formulas, patterns, and techniques.",
    date: "August 3, 2023",
    author: "Jane Smith",
    category: "Power Apps",
    views: 1120,
    imageUrl: "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/media/functions/function-errors/delegation-warning.png",
  },
];

export const popularPosts = posts.sort((a, b) => b.views - a.views).slice(0, 3);

export const techItems: TechItem[] = [
  {
    id: "power-apps",
    title: "Power Apps",
    description: "Build low-code apps that modernize processes and solve business challenges",
    icon: "https://learn.microsoft.com/en-us/power-platform/media/icons/power-apps.svg",
    color: "#742774",
  },
  {
    id: "power-automate",
    title: "Power Automate",
    description: "Boost productivity by automating repetitive, time-consuming tasks",
    icon: "https://learn.microsoft.com/en-us/power-platform/media/icons/flow.svg",
    color: "#0066FF",
  },
  {
    id: "power-bi",
    title: "Power BI",
    description: "Analyze data and share insights through rich, interactive visualizations",
    icon: "https://learn.microsoft.com/en-us/power-platform/media/icons/power-bi.svg",
    color: "#F2C811",
  },
  {
    id: "power-pages",
    title: "Power Pages",
    description: "Create external-facing websites that allow users to interact with your data",
    icon: "https://learn.microsoft.com/en-us/power-platform/media/icons/power-pages.svg",
    color: "#0D6E3D",
  },
];

export const fullBlogPost = {
  id: "1",
  title: "Getting Started with Power Apps: A Beginner's Guide",
  content: `
    <p>Microsoft Power Apps is a suite of apps, services, and connectors, as well as a data platform, that provides a rapid development environment to build custom apps for your business needs. Using Power Apps, you can quickly build custom business apps that connect to your data stored either in the underlying data platform (Microsoft Dataverse) or in various online and on-premises data sources (SharePoint, Excel, Office 365, Dynamics 365, SQL Server, and so on).</p>
    
    <h2>Why Power Apps?</h2>
    
    <p>Power Apps democratizes the custom business app building experience by enabling users to build feature-rich, custom business apps without writing code. Power Apps also provides an extensible platform that lets pro developers programmatically interact with data and metadata, apply business logic, create custom connectors, and integrate with external data.</p>
    
    <h2>Types of Power Apps</h2>
    
    <p>Power Apps offers three ways to build apps:</p>
    
    <h3>Canvas apps</h3>
    
    <p>Start with a blank canvas and design your app from scratch. Canvas apps give you complete control over the layout and design, allowing you to position elements exactly where you want them. Canvas apps are ideal for creating highly customized interfaces.</p>
    
    <h3>Model-driven apps</h3>
    
    <p>Start with your data model and build your business logic and processes on top of it. Model-driven apps automatically generate great-looking, responsive forms, views, and dashboards based on your data model. They are ideal for complex business logic and data relationships.</p>
    
    <h3>Portals</h3>
    
    <p>Create external-facing websites that allow users outside your organization to sign in with a wide variety of identities, create and view data in Dataverse, or even browse content anonymously.</p>
    
    <h2>Building Your First Power App</h2>
    
    <p>Let's walk through the process of creating a simple Canvas app from scratch:</p>
    
    <h3>Step 1: Sign in to Power Apps</h3>
    
    <p>Go to <a href="https://make.powerapps.com">https://make.powerapps.com</a> and sign in with your work or school account.</p>
    
    <h3>Step 2: Create a new Canvas app</h3>
    
    <p>Click on "Create" in the left navigation, then select "Canvas app from blank." Choose your app's format (Phone or Tablet) and give it a name.</p>
    
    <h3>Step 3: Design your app</h3>
    
    <p>Use the Power Apps Studio to add controls such as text inputs, buttons, galleries, and forms to your app. The drag-and-drop interface makes it easy to design your app without coding.</p>
    
    <h3>Step 4: Connect to data</h3>
    
    <p>Power Apps can connect to a wide variety of data sources. Click on "Data" in the left navigation, then "Add data" to connect to your preferred data source.</p>
    
    <h3>Step 5: Add logic with formulas</h3>
    
    <p>Power Apps uses a formula language similar to Excel to add logic to your app. For example, to make a button navigate to another screen, select the button and set its OnSelect property to: Navigate(Screen2)</p>
    
    <h3>Step 6: Test and publish your app</h3>
    
    <p>Use the "Play" button to test your app. Once you're satisfied, click "File" > "Save" to save your changes, then "Publish" to make your app available to users.</p>
    
    <h2>Conclusion</h2>
    
    <p>Power Apps is a powerful platform for building custom business applications without extensive coding knowledge. Whether you're automating a simple process or creating a complex business solution, Power Apps provides the tools to bring your ideas to life quickly and efficiently.</p>
    
    <p>In future articles, we'll dive deeper into advanced Power Apps techniques, so stay tuned!</p>
  `,
  date: "May 15, 2023",
  author: "Jane Smith",
  category: "Power Apps",
  views: 1250,
  imageUrl: "https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/media/get-started-test-drive/sign-in.png",
};
