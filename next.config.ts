import nextra from "nextra";
import { fileURLToPath } from "url";
import path from "path";

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withNextra = nextra({
  search: true,
  defaultShowCopyCode: true,
});


export default withNextra({
  output: "export",
  // basePath: "/numerical-computing",
  // assetPrefix: '/numerical-computing/', 
  images: {
    unoptimized: true,
  },
  
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "private-next-content-dir": path.join(__dirname, "content"),
      "private-next-root-dir": __dirname,
    };
    return config;
  },
});
