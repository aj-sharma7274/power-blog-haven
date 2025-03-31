
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { toast } from "sonner";
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

const DownloadTemplate = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    
    try {
      const zip = new JSZip();
      
      // Add files to the zip
      const files = [
        'index.html',
        'styles.css',
        'script.js',
        'readme.md',
        'package.json'
      ];
      
      const fetchPromises = files.map(async (file) => {
        const response = await fetch(`/converted/${file}`);
        const content = await (file.endsWith('.json') ? response.json() : response.text());
        zip.file(file, file.endsWith('.json') ? JSON.stringify(content, null, 2) : content);
      });
      
      await Promise.all(fetchPromises);
      
      // Generate and download the zip file
      const content = await zip.generateAsync({ type: 'blob' });
      saveAs(content, 'power-blog-template.zip');
      
      toast.success("Template downloaded successfully!", {
        description: "All files have been packaged into a zip file."
      });
    } catch (error) {
      console.error('Download error:', error);
      toast.error("Download failed", {
        description: "There was an error creating the download. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">HTML Template Download</h1>
      <p className="text-muted-foreground mb-8">
        Download the Power Blog Haven as a standalone HTML, CSS, and JavaScript template that can be used without any build process.
      </p>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2 className="text-xl font-bold mb-4">What's Included</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><code>index.html</code> - The main HTML file with blog post layout</li>
            <li><code>styles.css</code> - All styling for the template</li>
            <li><code>script.js</code> - JavaScript for interactive elements</li>
            <li><code>readme.md</code> - Documentation for using the template</li>
            <li><code>package.json</code> - For optional npm dependencies</li>
          </ul>
          
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
            <h3 className="text-blue-800 font-medium mb-2">How to Use</h3>
            <p className="text-blue-700">
              After downloading, unzip the files and open index.html in your browser. 
              No build process or server is required! You can customize the template 
              by editing the HTML, CSS, and JavaScript files directly.
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Button 
        size="lg" 
        onClick={handleDownload}
        disabled={isLoading}
        className="flex items-center gap-2">
        {isLoading ? (
          <span className="animate-spin mr-2">⟳</span>
        ) : (
          <Download size={20} />
        )}
        {isLoading ? "Creating Download..." : "Download HTML Template"}
      </Button>
    </div>
  );
};

export default DownloadTemplate;
