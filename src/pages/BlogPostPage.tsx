import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Eye, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import NewsletterSignup from "@/components/NewsletterSignup";

const BlogPostPage = () => {
  const { id } = useParams();
  
  // Custom blog post for the Blogger template conversion guide
  const bloggerTemplatePost = {
    title: "Converting This Power Platform Blog to a Blogger Template",
    category: "Web Development",
    author: "PowerBlog Team",
    date: "July 15, 2023",
    views: 1250,
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    content: `
      <h2>Introduction</h2>
      <p>Many readers have asked how they can use this Power Platform blog design as a template for their Blogger.com sites. In this comprehensive guide, we'll walk through the process of converting our React-based design into a Blogger template.</p>
      
      <h2>Understanding Blogger Templates</h2>
      <p>Blogger templates use an XML-based structure with specific tags that tell the platform how to render your content. Unlike our React application, Blogger templates combine HTML, CSS, and Blogger's special markup language.</p>
      
      <h3>Key Template Components</h3>
      <ul>
        <li><strong>HTML markup</strong>: Provides the basic structure</li>
        <li><strong>CSS styling</strong>: Controls the visual appearance</li>
        <li><strong>Blogger tags</strong>: Special XML tags like &lt;b:section&gt; and &lt;b:widget&gt;</li>
        <li><strong>JavaScript</strong>: For interactivity (but not React components)</li>
      </ul>
      
      <h2>Step 1: Export the Design Elements</h2>
      <p>First, we need to extract the key design elements from our React application:</p>
      <ul>
        <li>Color scheme (our purple/blue brand colors)</li>
        <li>Typography (Inter for body text, Merriweather for headings)</li>
        <li>Layout structure (header, content areas, sidebar, footer)</li>
        <li>Component designs (cards, buttons, navigation)</li>
      </ul>
      
      <h2>Step 2: Create the Basic Template Structure</h2>
      <p>Start with Blogger's basic template structure:</p>
      
      <pre><code>
&lt;?xml version="1.0" encoding="UTF-8" ?&gt;
&lt;!DOCTYPE html&gt;
&lt;html b:css='false' b:js='false' b:responsive='true' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'&gt;
  &lt;head&gt;
    &lt;meta charset='utf-8'/&gt;
    &lt;meta content='width=device-width, initial-scale=1' name='viewport'/&gt;
    &lt;title&gt;&lt;data:blog.pageTitle/&gt;&lt;/title&gt;
    
    &lt;!-- CSS Styles --&gt;
    &lt;style&gt;
      /* Your custom CSS will go here */
    &lt;/style&gt;
  &lt;/head&gt;
  
  &lt;body&gt;
    &lt;!-- Template content will go here --&gt;
  &lt;/body&gt;
&lt;/html&gt;
      </code></pre>
      
      <h2>Step 3: Implement the Header/Navigation</h2>
      <p>Convert our React Navbar component to Blogger HTML/XML:</p>
      
      <pre><code>
&lt;header class='bg-background sticky top-0 z-50 w-full border-b py-3 shadow-sm'&gt;
  &lt;div class='container'&gt;
    &lt;div class='flex items-center justify-between'&gt;
      &lt;div class='flex items-center gap-2'&gt;
        &lt;b:section id='header' maxwidgets='1'&gt;
          &lt;b:widget id='Header1' locked='true' title='PowerBlog (Header)' type='Header'&gt;
            &lt;b:widget-settings&gt;
              &lt;b:widget-setting name='displayUrl'/&gt;
              &lt;b:widget-setting name='displayHeight'>0&lt;/b:widget-setting&gt;
              &lt;b:widget-setting name='sectionWidth'>-1&lt;/b:widget-setting&gt;
              &lt;b:widget-setting name='useImage'>false&lt;/b:widget-setting&gt;
              &lt;b:widget-setting name='shrinkToFit'>false&lt;/b:widget-setting&gt;
              &lt;b:widget-setting name='imagePlacement'>BEHIND&lt;/b:widget-setting&gt;
              &lt;b:widget-setting name='displayWidth'>0&lt;/b:widget-setting&gt;
            &lt;/b:widget-settings&gt;
            &lt;b:includable id='main'&gt;
              &lt;div class='font-merriweather text-2xl font-bold text-power-600'&gt;
                &lt;a expr:href='data:blog.homepageUrl'&gt;PowerBlog&lt;/a&gt;
              &lt;/div&gt;
            &lt;/b:includable&gt;
          &lt;/b:widget&gt;
        &lt;/b:section&gt;
      &lt;/div&gt;
      
      &lt;!-- Navigation Menu --&gt;
      &lt;nav class='flex items-center gap-6'&gt;
        &lt;a href='/' class='text-sm font-medium hover:text-power-600 transition-colors'&gt;Home&lt;/a&gt;
        &lt;a href='/search' class='text-sm font-medium hover:text-power-600 transition-colors'&gt;Blog&lt;/a&gt;
        &lt;a href='/p/about.html' class='text-sm font-medium hover:text-power-600 transition-colors'&gt;About&lt;/a&gt;
        &lt;a href='/p/contact.html' class='text-sm font-medium hover:text-power-600 transition-colors'&gt;Contact&lt;/a&gt;
      &lt;/nav&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/header&gt;
      </code></pre>
      
      <h2>Step 4: Implement the Blog Content Area</h2>
      <p>The main blog content area needs to display posts dynamically using Blogger's tags:</p>
      
      <pre><code>
&lt;main class='flex-1 py-8'&gt;
  &lt;div class='container'&gt;
    &lt;div class='grid grid-cols-1 lg:grid-cols-3 gap-8'&gt;
      &lt;!-- Main Content Area --&gt;
      &lt;div class='lg:col-span-2'&gt;
        &lt;b:section id='main' showaddelement='yes'&gt;
          &lt;b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog'&gt;
            &lt;b:includable id='main'&gt;
              &lt;!-- Posts --&gt;
              &lt;div class='blog-posts'&gt;
                &lt;b:if cond='data:mobileView'&gt;
                  &lt;!-- Mobile View --&gt;
                  &lt;data:defaultAdStart/&gt;
                  &lt;b:loop values='data:posts' var='post'&gt;
                    &lt;b:include name='mobile-post'/&gt;
                  &lt;/b:loop&gt;
                  &lt;data:defaultAdEnd/&gt;
                &lt;b:else/&gt;
                  &lt;!-- Desktop View --&gt;
                  &lt;data:defaultAdStart/&gt;
                  &lt;b:loop values='data:posts' var='post'&gt;
                    &lt;b:include name='post'/&gt;
                  &lt;/b:loop&gt;
                  &lt;data:defaultAdEnd/&gt;
                &lt;/b:if&gt;
              &lt;/div&gt;
              
              &lt;!-- Pagination --&gt;
              &lt;b:include name='nextprev'/&gt;
            &lt;/b:includable&gt;
            
            &lt;!-- Post Template --&gt;
            &lt;b:includable id='post'&gt;
              &lt;div class='card overflow-hidden h-full hover:shadow-md transition-all mb-8'&gt;
                &lt;!-- Post Image --&gt;
                &lt;b:if cond='data:post.featuredImage'&gt;
                  &lt;div class='aspect-video w-full overflow-hidden'&gt;
                    &lt;img expr:src='data:post.featuredImage' expr:alt='data:post.title' class='h-full w-full object-cover transition-transform hover:scale-105 duration-500'/&gt;
                  &lt;/div&gt;
                &lt;/b:if&gt;
                
                &lt;div class='pt-6 px-6'&gt;
                  &lt;!-- Post Title --&gt;
                  &lt;h3 class='text-xl font-bold mb-2 hover:text-power-600 transition-colors'&gt;
                    &lt;a expr:href='data:post.url'&gt;&lt;data:post.title/&gt;&lt;/a&gt;
                  &lt;/h3&gt;
                  
                  &lt;!-- Post Metadata --&gt;
                  &lt;div class='flex flex-wrap items-center gap-4 text-muted-foreground mb-4'&gt;
                    &lt;div class='flex items-center'&gt;
                      &lt;span class='mr-2'&gt;&lt;!-- User icon --&gt;&lt;/span&gt;
                      &lt;data:post.author.name/&gt;
                    &lt;/div&gt;
                    &lt;div class='flex items-center'&gt;
                      &lt;span class='mr-2'&gt;&lt;!-- Calendar icon --&gt;&lt;/span&gt;
                      &lt;data:post.date/&gt;
                    &lt;/div&gt;
                  &lt;/div&gt;
                  
                  &lt;!-- Post Snippet --&gt;
                  &lt;p class='text-muted-foreground line-clamp-3'&gt;&lt;data:post.snippet/&gt;&lt;/p&gt;
                  
                  &lt;!-- Read More Button --&gt;
                  &lt;div class='mt-4 mb-6'&gt;
                    &lt;a expr:href='data:post.url' class='bg-power-600 hover:bg-power-700 text-white font-bold py-2 px-4 rounded'&gt;Read More&lt;/a&gt;
                  &lt;/div&gt;
                &lt;/div&gt;
              &lt;/div&gt;
            &lt;/b:includable&gt;
          &lt;/b:widget&gt;
        &lt;/b:section&gt;
      &lt;/div&gt;
      
      &lt;!-- Sidebar --&gt;
      &lt;div class='sidebar'&gt;
        &lt;div class='bg-gray-50 p-6 rounded-lg sticky top-20'&gt;
          &lt;h2 class='text-xl font-bold mb-4'&gt;Popular Posts&lt;/h2&gt;
          &lt;b:section id='sidebar' showaddelement='yes'&gt;
            &lt;!-- Sidebar Widgets --&gt;
            &lt;b:widget id='PopularPosts1' locked='false' title='Popular Posts' type='PopularPosts'&gt;
              &lt;!-- Popular posts widget template --&gt;
            &lt;/b:widget&gt;
            
            &lt;b:widget id='Label1' locked='false' title='Categories' type='Label'&gt;
              &lt;!-- Labels/Categories widget template --&gt;
            &lt;/b:widget&gt;
          &lt;/b:section&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/main&gt;
      </code></pre>
      
      <h2>Step 5: Add CSS Styling</h2>
      <p>We need to adapt our Tailwind styling to regular CSS for Blogger:</p>
      
      <pre><code>
&lt;style&gt;
  /* Import fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Merriweather:wght@300;400;700&display=swap');
  
  /* Base styles */
  body {
    font-family: 'Inter', sans-serif;
    background-color: #f8fafc;
    color: #1e293b;
    margin: 0;
    padding: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather', serif;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  /* Header styles */
  header {
    background-color: #ffffff;
    border-bottom: 1px solid #e2e8f0;
    padding: 0.75rem 0;
    position: sticky;
    top: 0;
    z-index: 50;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
  
  /* Navigation */
  nav a {
    font-size: 0.875rem;
    font-weight: 500;
    color: #1e293b;
    text-decoration: none;
    transition: color 0.2s;
  }
  
  nav a:hover {
    color: #5f6cf2;
  }
  
  /* Grid layouts */
  .grid {
    display: grid;
    gap: 2rem;
  }
  
  .grid-cols-1 {
    grid-template-columns: 1fr;
  }
  
  @media (min-width: 1024px) {
    .lg\\:grid-cols-3 {
      grid-template-columns: 2fr 1fr;
    }
  }
  
  /* Card styles */
  .card {
    background-color: #ffffff;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: box-shadow 0.3s;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  }
  
  .card:hover {
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  
  /* Button styles */
  .button {
    display: inline-block;
    background-color: #5f6cf2;
    color: white;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    text-decoration: none;
    transition: background-color 0.2s;
  }
  
  .button:hover {
    background-color: #444ae6;
  }
  
  /* Footer styles */
  footer {
    background-color: #f1f5f9;
    border-top: 1px solid #e2e8f0;
    padding: 3rem 0;
  }
  
  /* Color definitions */
  .text-power-600 {
    color: #5f6cf2;
  }
  
  .bg-power-600 {
    background-color: #5f6cf2;
  }
  
  .hover\\:bg-power-700:hover {
    background-color: #444ae6;
  }
  
  .text-muted-foreground {
    color: #64748b;
  }
  
  /* Additional utility classes */
  .flex {
    display: flex;
  }
  
  .flex-1 {
    flex: 1;
  }
  
  .items-center {
    align-items: center;
  }
  
  .justify-between {
    justify-content: space-between;
  }
  
  .gap-2 {
    gap: 0.5rem;
  }
  
  .gap-4 {
    gap: 1rem;
  }
  
  .gap-6 {
    gap: 1.5rem;
  }
  
  .mb-2 {
    margin-bottom: 0.5rem;
  }
  
  .mb-4 {
    margin-bottom: 1rem;
  }
  
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  
  .mb-8 {
    margin-bottom: 2rem;
  }
  
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  
  .py-8 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  
  .pt-6 {
    padding-top: 1.5rem;
  }
  
  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  
  .font-bold {
    font-weight: 700;
  }
  
  .text-2xl {
    font-size: 1.5rem;
  }
  
  .text-xl {
    font-size: 1.25rem;
  }
&lt;/style&gt;
      </code></pre>
      
      <h2>Step 6: Implement the Footer</h2>
      <p>Convert our React Footer component to Blogger HTML/CSS:</p>
      
      <pre><code>
&lt;footer class='bg-gray-50 border-t py-12'&gt;
  &lt;div class='container'&gt;
    &lt;div class='grid grid-cols-1 gap-8 md:grid-cols-4'&gt;
      &lt;div class='col-span-1 md:col-span-2'&gt;
        &lt;h2 class='text-2xl font-bold text-power-600 mb-4'&gt;PowerBlog&lt;/h2&gt;
        &lt;p class='text-gray-600 mb-4 max-w-sm'&gt;
          The ultimate resource for Power Platform enthusiasts. Tutorials, tips, and
          insights to help you build better solutions.
        &lt;/p&gt;
        &lt;div class='flex space-x-4'&gt;
          &lt;a href='#' class='text-gray-600 hover:text-power-600 transition-colors'&gt;
            &lt;!-- Facebook icon --&gt;
          &lt;/a&gt;
          &lt;a href='#' class='text-gray-600 hover:text-power-600 transition-colors'&gt;
            &lt;!-- Twitter icon --&gt;
          &lt;/a&gt;
          &lt;a href='#' class='text-gray-600 hover:text-power-600 transition-colors'&gt;
            &lt;!-- LinkedIn icon --&gt;
          &lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;
      
      &lt;div&gt;
        &lt;h3 class='font-bold mb-4'&gt;Quick Links&lt;/h3&gt;
        &lt;ul class='space-y-2'&gt;
          &lt;li&gt;
            &lt;a href='/' class='text-gray-600 hover:text-power-600 transition-colors'&gt;Home&lt;/a&gt;
          &lt;/li&gt;
          &lt;li&gt;
            &lt;a href='/search' class='text-gray-600 hover:text-power-600 transition-colors'&gt;Blog&lt;/a&gt;
          &lt;/li&gt;
          &lt;li&gt;
            &lt;a href='/p/about.html' class='text-gray-600 hover:text-power-600 transition-colors'&gt;About&lt;/a&gt;
          &lt;/li&gt;
          &lt;li&gt;
            &lt;a href='/p/contact.html' class='text-gray-600 hover:text-power-600 transition-colors'&gt;Contact&lt;/a&gt;
          &lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
      
      &lt;div&gt;
        &lt;h3 class='font-bold mb-4'&gt;Categories&lt;/h3&gt;
        &lt;b:widget id='Label2' locked='false' title='Categories' type='Label'&gt;
          &lt;!-- Template for categories list in the footer --&gt;
        &lt;/b:widget&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    
    &lt;div class='border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600'&gt;
      &lt;p&gt;&amp;copy; &lt;script&gt;document.write(new Date().getFullYear())&lt;/script&gt; PowerBlog. All rights reserved.&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/footer&gt;
      </code></pre>
      
      <h2>Step 7: Import to Blogger</h2>
      <p>To import your template to Blogger:</p>
      <ol>
        <li>Combine all the code snippets into a single XML file</li>
        <li>In Blogger dashboard, go to Theme → Edit HTML</li>
        <li>Backup your current template first!</li>
        <li>Delete all existing code and paste your new template</li>
        <li>Save the template</li>
        <li>Preview your site to make sure everything is working correctly</li>
      </ol>
      
      <h2>Step 8: Customize and Fine-Tune</h2>
      <p>After importing, you'll likely need to make some adjustments:</p>
      <ul>
        <li>Fix any layout issues or styling problems</li>
        <li>Add additional Blogger widgets as needed</li>
        <li>Customize colors and fonts to match your brand</li>
        <li>Add conditional logic for different page types</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Converting a React application to a Blogger template requires significant adaptation, but the end result can be a beautiful, customized blog that maintains the visual design of our original site while leveraging Blogger's platform features.</p>
      
      <p>Remember that Blogger templates have their own limitations compared to a full React application, so some advanced features or animations may need to be simplified or reimplemented using different approaches.</p>
      
      <p>In our next article, we'll cover adding advanced features like a comment system, responsive design improvements, and SEO optimization for your Blogger template.</p>
    `,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div>
                <Badge className="mb-4 bg-blog-100 text-blog-800 hover:bg-blog-200">
                  {bloggerTemplatePost.category}
                </Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{bloggerTemplatePost.title}</h1>
                
                <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8">
                  <div className="flex items-center">
                    <User size={18} className="mr-2" />
                    <span>{bloggerTemplatePost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={18} className="mr-2" />
                    <span>{bloggerTemplatePost.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye size={18} className="mr-2" />
                    <span>{bloggerTemplatePost.views} views</span>
                  </div>
                </div>
                
                <div className="mb-8">
                  <img
                    src={bloggerTemplatePost.imageUrl}
                    alt={bloggerTemplatePost.title}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                <div 
                  className="blog-content prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: bloggerTemplatePost.content }}
                />
                
                <Separator className="my-8" />
                
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <span>Share this article:</span>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Facebook
                    </Button>
                    <Button variant="outline" size="sm">
                      Twitter
                    </Button>
                    <Button variant="outline" size="sm">
                      LinkedIn
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-gray-50 p-6 rounded-lg sticky top-20">
                <h2 className="text-xl font-bold mb-4">More Resources</h2>
                <div className="space-y-6">
                  <div className="flex gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                      alt="Blogger API Documentation"
                      className="h-16 w-16 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-medium line-clamp-2">
                        <a 
                          href="https://developers.google.com/blogger" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-power-600 transition-colors"
                        >
                          Blogger API Documentation
                        </a>
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <span>Official Google Resource</span>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  
                  <div className="flex gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                      alt="Blogger Template Guide"
                      className="h-16 w-16 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-medium line-clamp-2">
                        <a 
                          href="https://support.google.com/blogger/answer/176245"
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="hover:text-power-600 transition-colors"
                        >
                          Blogger Template Guide
                        </a>
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <span>Official Blogger Support</span>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  
                  <div className="flex gap-3">
                    <img
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                      alt="XML Fundamentals"
                      className="h-16 w-16 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-medium line-clamp-2">
                        <a 
                          href="https://www.w3schools.com/xml/" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-power-600 transition-colors"
                        >
                          XML Fundamentals for Templates
                        </a>
                      </h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <span>W3Schools Tutorial</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
