import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { toast } from "sonner";

const BloggerTemplate = () => {
  const [templateCode, setTemplateCode] = useState('');
  
  useEffect(() => {
    // Create the Blogger XML template
    const bloggerTemplate = `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:js='false' b:responsive='true' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
  <meta charset='utf-8'/>
  <meta content='width=device-width, initial-scale=1' name='viewport'/>
  <title><data:blog.pageTitle/></title>
  
  <!-- Meta Data -->
  <meta content='text/html; charset=UTF-8' http-equiv='Content-Type'/>
  <meta content='blogger' name='generator'/>
  <link expr:href='data:blog.homepageUrl' rel='canonical'/>
  
  <!-- CSS Styles -->
  <style>
    /* Import fonts */
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&amp;family=Merriweather:wght@300;400;700&amp;display=swap');
    
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
      .lg-grid-cols-3 {
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
      margin-bottom: 2rem;
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
    
    .hover-bg-power-700:hover {
      background-color: #444ae6;
    }
    
    .text-muted {
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
    
    /* Blog specific styles */
    .post-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    
    .post-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 1rem;
      color: #64748b;
      font-size: 0.875rem;
    }
    
    .post-content {
      line-height: 1.7;
    }
    
    .category-label {
      display: inline-block;
      background-color: #e0e7ff;
      color: #4338ca;
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }
    
    .post-image {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
    
    .aspect-video {
      position: relative;
      padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
    }
    
    .aspect-video img {
      position: absolute;
      object-fit: cover;
      width: 100%;
      height: 100%;
      transition: transform 0.3s;
    }
    
    .aspect-video:hover img {
      transform: scale(1.05);
    }
    
    /* Newsletter section */
    .newsletter {
      background-color: #5f6cf2;
      color: white;
      padding: 4rem 0;
      margin-top: 4rem;
    }
    
    .newsletter h2 {
      font-size: 2rem;
      margin-bottom: 1rem;
    }
    
    .newsletter-form {
      display: flex;
      gap: 0.5rem;
      max-width: 500px;
      margin: 0 auto;
    }
    
    .newsletter-input {
      flex: 1;
      padding: 0.75rem 1rem;
      border: none;
      border-radius: 0.25rem;
      font-size: 1rem;
    }
    
    /* Tech cards */
    .tech-card {
      height: 100%;
      border-top-width: 4px;
      transition: all 0.2s;
    }
    
    .tech-card:hover {
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      .container {
        padding: 0 1rem;
      }
      
      .newsletter-form {
        flex-direction: column;
      }
    }
  </style>
</head>

<body>
  <!-- Header -->
  <header>
    <div class='container'>
      <div class='flex items-center justify-between'>
        <div class='flex items-center gap-2'>
          <b:section id='header' maxwidgets='1'>
            <b:widget id='Header1' locked='true' title='PowerBlog (Header)' type='Header'>
              <b:includable id='main'>
                <div class='text-2xl font-bold text-power-600'>
                  <a expr:href='data:blog.homepageUrl'><data:title/></a>
                </div>
              </b:includable>
            </b:widget>
          </b:section>
        </div>
        
        <!-- Navigation Menu -->
        <nav class='flex items-center gap-6'>
          <a expr:href='data:blog.homepageUrl'>Home</a>
          <a href='/search'>Blog</a>
          <a href='/p/about.html'>About</a>
          <a href='/p/contact.html'>Contact</a>
        </nav>
      </div>
    </div>
  </header>

  <!-- Page Type Conditional Sections -->
  <b:if cond='data:blog.pageType == &quot;index&quot;'>
    <!-- Homepage Hero Section -->
    <div style='background-color: #f8fafc; padding: 4rem 0;'>
      <div class='container'>
        <div class='grid' style='grid-template-columns: 1fr 1fr; gap: 2rem;'>
          <div style='display: flex; flex-direction: column; justify-content: center;'>
            <h1 style='font-size: 2.5rem; font-weight: 800; margin-bottom: 1.5rem;' class='text-power-600'>
              Power Platform Blog Haven
            </h1>
            <p style='font-size: 1.125rem; margin-bottom: 2rem; color: #64748b;'>
              Your ultimate resource for Power Platform tutorials, tips, and insights. 
              Learn how to build better solutions with Microsoft Power Platform.
            </p>
            <div>
              <a href='/search' class='button'>Browse Articles</a>
            </div>
          </div>
          <div style='display: flex; align-items: center; justify-content: center;'>
            <img src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80' 
                alt='PowerApps on Device' 
                style='max-width: 100%; height: auto; border-radius: 0.5rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);'/>
          </div>
        </div>
      </div>
    </div>
  </b:if>

  <!-- Main Content Area -->
  <main class='py-8'>
    <div class='container'>
      <div class='grid' style='grid-template-columns: 2fr 1fr; gap: 2rem;'>
        <!-- Main Blog Posts -->
        <div>
          <b:section id='main' showaddelement='yes'>
            <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog'>
              <!-- Main Blog Posts Template -->
              <b:includable id='main'>
                <b:if cond='data:blog.pageType == &quot;item&quot;'>
                  <!-- Single Post Template -->
                  <b:loop values='data:posts' var='post'>
                    <article class='card'>
                      <div class='px-6 pt-6 pb-6'>
                        <div class='category-label'><data:post.labels.first/></div>
                        
                        <h1 class='post-title' style='font-size: 2rem;'><data:post.title/></h1>
                        
                        <div class='post-meta'>
                          <div>
                            <span style='vertical-align: middle; margin-right: 0.5rem;'>👤</span>
                            <data:post.author.name/>
                          </div>
                          <div>
                            <span style='vertical-align: middle; margin-right: 0.5rem;'>📅</span>
                            <data:post.date/>
                          </div>
                        </div>
                        
                        <b:if cond='data:post.featuredImage'>
                          <div class='mb-6'>
                            <img expr:src='data:post.featuredImage' expr:alt='data:post.title' class='post-image rounded'/>
                          </div>
                        </b:if>
                        
                        <div class='post-content'>
                          <data:post.body/>
                        </div>
                        
                        <div class='mt-8'>
                          <div class='flex items-center justify-between'>
                            <div>
                              <b:if cond='data:post.labels'>
                                <div class='mb-4'>
                                  <b:loop values='data:post.labels' var='label'>
                                    <a expr:href='data:label.url' class='category-label'><data:label.name/></a>
                                  </b:loop>
                                </div>
                              </b:if>
                            </div>
                            <div class='flex gap-2'>
                              <a href='#' class='button' onclick='window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(location.href), "facebook-share", "width=580,height=296"); return false;'>Share</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </b:loop>
                <b:else/>
                  <!-- Blog Posts List Template -->
                  <b:loop values='data:posts' var='post'>
                    <article class='card'>
                      <b:if cond='data:post.featuredImage'>
                        <div class='aspect-video'>
                          <a expr:href='data:post.url'>
                            <img expr:src='data:post.featuredImage' expr:alt='data:post.title'/>
                          </a>
                        </div>
                      </b:if>
                      <div class='px-6 pt-6 pb-6'>
                        <b:if cond='data:post.labels'>
                          <div class='category-label'><data:post.labels.first/></div>
                        </b:if>
                        
                        <h2 class='post-title'>
                          <a expr:href='data:post.url'><data:post.title/></a>
                        </h2>
                        
                        <div class='post-meta'>
                          <div>
                            <span style='vertical-align: middle; margin-right: 0.5rem;'>👤</span>
                            <data:post.author.name/>
                          </div>
                          <div>
                            <span style='vertical-align: middle; margin-right: 0.5rem;'>📅</span>
                            <data:post.date/>
                          </div>
                        </div>
                        
                        <p class='text-muted mb-4'><data:post.snippet/></p>
                        
                        <a expr:href='data:post.url' class='button'>Read More</a>
                      </div>
                    </article>
                  </b:loop>
                  
                  <!-- Pagination -->
                  <b:include name='nextprev'/>
                </b:if>
              </b:includable>
              
              <!-- Next/Previous Navigation -->
              <b:includable id='nextprev'>
                <div class='flex items-center justify-between mt-8 mb-8'>
                  <b:if cond='data:newerPageUrl'>
                    <a expr:href='data:newerPageUrl' class='button'>
                      <span>← Newer Posts</span>
                    </a>
                  <b:else/>
                    <span></span>
                  </b:if>
                  
                  <b:if cond='data:olderPageUrl'>
                    <a expr:href='data:olderPageUrl' class='button'>
                      <span>Older Posts →</span>
                    </a>
                  <b:else/>
                    <span></span>
                  </b:if>
                </div>
              </b:includable>
            </b:widget>
          </b:section>
        </div>
        
        <!-- Sidebar -->
        <div>
          <div class='card' style='position: sticky; top: 20px;'>
            <div class='px-6 pt-6 pb-6'>
              <h2 class='text-xl font-bold mb-4'>About</h2>
              <p class='text-muted mb-4'>Welcome to PowerBlog, your ultimate resource for Power Platform enthusiasts. Find tutorials, tips, and insights to help you build better solutions.</p>
              
              <h2 class='text-xl font-bold mb-4 mt-8'>Categories</h2>
              <b:section id='sidebar' showaddelement='yes'>
                <b:widget id='Label1' locked='false' title='Categories' type='Label'>
                  <b:includable id='main'>
                    <div>
                      <b:loop values='data:labels' var='label'>
                        <div class='mb-2'>
                          <a expr:href='data:label.url' class='hover-text-power-600'>
                            <data:label.name/> (<data:label.count/>)
                          </a>
                        </div>
                      </b:loop>
                    </div>
                  </b:includable>
                </b:widget>
                
                <b:widget id='PopularPosts1' locked='false' title='Popular Posts' type='PopularPosts'>
                  <b:includable id='main'>
                    <h2 class='text-xl font-bold mb-4 mt-8'>Popular Posts</h2>
                    <div>
                      <b:loop values='data:posts' var='post'>
                        <div class='flex gap-3 mb-4'>
                          <b:if cond='data:post.featuredImage'>
                            <a expr:href='data:post.url'>
                              <img expr:src='data:post.featuredImage' expr:alt='data:post.title' style='width: 4rem; height: 4rem; object-fit: cover; border-radius: 0.25rem;'/>
                            </a>
                          </b:if>
                          <div>
                            <h3 style='font-weight: 500; line-height: 1.2;' class='mb-1'>
                              <a expr:href='data:post.url' class='hover-text-power-600'><data:post.title/></a>
                            </h3>
                            <div style='font-size: 0.75rem; color: #64748b;'>
                              <data:post.date/>
                            </div>
                          </div>
                        </div>
                      </b:loop>
                    </div>
                  </b:includable>
                </b:widget>
              </b:section>
              
              <div class='mt-8'>
                <h2 class='text-xl font-bold mb-4'>Follow Us</h2>
                <div class='flex gap-4'>
                  <a href='#' class='text-muted hover-text-power-600' aria-label='Facebook'>
                    <span style='font-size: 1.5rem;'>📱</span>
                  </a>
                  <a href='#' class='text-muted hover-text-power-600' aria-label='Twitter'>
                    <span style='font-size: 1.5rem;'>💬</span>
                  </a>
                  <a href='#' class='text-muted hover-text-power-600' aria-label='LinkedIn'>
                    <span style='font-size: 1.5rem;'>📇</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  
  <!-- Newsletter Section -->
  <section class='newsletter'>
    <div class='container' style='text-align: center;'>
      <h2>Subscribe to Our Newsletter</h2>
      <p class='mb-6'>Get the latest Power Platform tips and tutorials delivered to your inbox.</p>
      
      <form class='newsletter-form'>
        <input type='email' placeholder='Your email address' class='newsletter-input' required=''/>
        <button type='submit' class='button' style='background-color: #ffffff; color: #5f6cf2;'>Subscribe</button>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <div class='container'>
      <div class='grid' style='grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;'>
        <div>
          <h3 class='text-xl font-bold text-power-600 mb-4'>PowerBlog</h3>
          <p class='text-muted mb-4'>The ultimate resource for Power Platform enthusiasts. Tutorials, tips, and insights to help you build better solutions.</p>
          <div class='flex gap-4'>
            <a href='#' class='text-muted hover-text-power-600' aria-label='Facebook'>
              <span style='font-size: 1.5rem;'>📱</span>
            </a>
            <a href='#' class='text-muted hover-text-power-600' aria-label='Twitter'>
              <span style='font-size: 1.5rem;'>💬</span>
            </a>
            <a href='#' class='text-muted hover-text-power-600' aria-label='LinkedIn'>
              <span style='font-size: 1.5rem;'>📇</span>
            </a>
          </div>
        </div>
        
        <div>
          <h3 class='font-bold mb-4'>Quick Links</h3>
          <ul style='list-style-type: none; padding: 0; margin: 0;'>
            <li class='mb-2'>
              <a expr:href='data:blog.homepageUrl' class='text-muted hover-text-power-600'>Home</a>
            </li>
            <li class='mb-2'>
              <a href='/search' class='text-muted hover-text-power-600'>Blog</a>
            </li>
            <li class='mb-2'>
              <a href='/p/about.html' class='text-muted hover-text-power-600'>About</a>
            </li>
            <li class='mb-2'>
              <a href='/p/contact.html' class='text-muted hover-text-power-600'>Contact</a>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 class='font-bold mb-4'>Categories</h3>
          <b:section id='footer-labels'>
            <b:widget id='Label2' locked='false' title='Categories' type='Label'>
              <b:includable id='main'>
                <ul style='list-style-type: none; padding: 0; margin: 0;'>
                  <b:loop values='data:labels' var='label' max='5'>
                    <li class='mb-2'>
                      <a expr:href='data:label.url' class='text-muted hover-text-power-600'>
                        <data:label.name/>
                      </a>
                    </li>
                  </b:loop>
                </ul>
              </b:includable>
            </b:widget>
          </b:section>
        </div>
        
        <div>
          <h3 class='font-bold mb-4'>Contact</h3>
          <ul style='list-style-type: none; padding: 0; margin: 0;'>
            <li class='mb-2 text-muted'>
              <span style='vertical-align: middle; margin-right: 0.5rem;'>📧</span> hello@powerblog.com
            </li>
            <li class='mb-2 text-muted'>
              <span style='vertical-align: middle; margin-right: 0.5rem;'>📞</span> +1 (555) 123-4567
            </li>
          </ul>
        </div>
      </div>
      
      <div style='margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid #e2e8f0; text-align: center;'>
        <p class='text-muted'>
          &copy; <script>document.write(new Date().getFullYear())</script> PowerBlog. All rights reserved.
        </p>
      </div>
    </div>
  </footer>

  <script>
    // Mobile menu toggle
    function toggleMobileMenu() {
      const menu = document.querySelector('nav');
      menu.classList.toggle('mobile-menu-open');
    }
  </script>

  <b:section class='hidden' id='hidden-widgets'>
    <!-- Add additional widgets here -->
  </b:section>
</body>
</html>`;

    setTemplateCode(bloggerTemplate);
  }, []);

  const downloadTemplate = () => {
    // Create a blob with the template code
    const blob = new Blob([templateCode], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    
    // Create a download link and trigger it
    const a = document.createElement('a');
    a.href = url;
    a.download = 'powerblog-template.xml';
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    // Show success toast
    toast.success("Template downloaded successfully", {
      description: "You can now import this file into your Blogger dashboard."
    });
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Blogger Template Download</h1>
      <p className="text-muted-foreground mb-8">
        Click the button below to download the PowerBlog Blogger template. Once downloaded, you can import this template into your Blogger.com site.
      </p>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2 className="text-xl font-bold mb-4">How to Import the Template</h2>
          <ol className="list-decimal pl-5 space-y-2">
            <li>Log in to your Blogger.com dashboard</li>
            <li>Click on the blog you want to customize</li>
            <li>Go to "Theme" in the left sidebar</li>
            <li>Click on the dropdown menu (three dots) and select "Edit HTML"</li>
            <li>First, backup your current template by clicking "Download theme"</li>
            <li>Delete all existing HTML in the editor</li>
            <li>Open the downloaded .xml file in a text editor</li>
            <li>Copy all content and paste it into the Blogger HTML editor</li>
            <li>Click "Save" to apply the template</li>
          </ol>
          
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-md">
            <h3 className="text-amber-800 font-medium mb-2">Troubleshooting XML Errors</h3>
            <p className="text-amber-700">
              If you encounter XML errors when importing, check that all special characters in the template 
              are properly escaped. In XML, special characters like &amp;, &lt;, and &gt; must be written as 
              &amp;amp;, &amp;lt;, and &amp;gt;.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Button 
        size="lg" 
        onClick={downloadTemplate}
        className="flex items-center gap-2">
        <Download size={20} />
        Download Blogger Template
      </Button>
    </div>
  );
};

export default BloggerTemplate;
