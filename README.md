
# QR Forge

QR Forge is a powerful, user-friendly QR code generator web application that allows you to create customized QR codes with various styling options. Built with modern web technologies like React and Tailwind CSS, it offers a seamless and responsive user experience.

## Live Demo

🚀 [Check out QR Forge in action](https://qr-code-generator-from-url.up.railway.app/) <!-- Update this with your Railway URL once deployed -->

## Features

✨ **Instant QR Code Generation**: Create QR codes from any text or URL in real-time.

🎨 **Customization Options**:
- Add custom text below the QR code
- Embed your logo in the center of the QR code
- Adjust image resolution for high-quality exports

📋 **Easy Export**: Copy your QR code directly to the clipboard or download as a PNG file.

📱 **Fully Responsive**: Works beautifully on all devices, from mobile phones to desktop computers.

🚀 **Modern UI**: Clean, intuitive interface with smooth animations and gradient accents.

## How It Works

QR Forge leverages the power of several technologies to deliver a seamless QR code generation experience:

1. **Input Handling**: Enter any text or URL into the input field.
2. **QR Code Generation**: The `qrcode.react` library processes your input and generates a QR code SVG.
3. **Customization**: Apply additional customizations like adding text, logos, or adjusting resolution.
4. **Export Options**: Convert the SVG to PNG for downloading or copying to clipboard.

### Technical Implementation

- **React Components**: Modular component structure for maintainability and code reuse.
- **Canvas API**: Used for rendering the final QR code with text additions.
- **Clipboard API**: Enables direct copying of the generated QR code to clipboard.
- **Advanced Styling**: Tailwind CSS with custom gradients for a polished UI.

## Development

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jeevanba273/qr-code-generator-from-url.git
   cd qr-code-generator-from-url
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:8080](http://localhost:8080) in your browser.

## Hosting on Railway.app

### Step-by-Step Deployment Guide

1. **Create a Railway Account**:
   - Sign up at [Railway.app](https://railway.app/)
   - Verify your email and log in

2. **Connect Your GitHub Repository**:
   - Click on "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your GitHub account if not already connected
   - Select the QR Forge repository

3. **Configure Your Project**:
   - In the Railway dashboard, go to the "Settings" tab
   - Under "Build & Deploy" settings, configure:
     - Build Command: `npm run build`
     - Start Command: `node server.js`
   - Set the following environment variables:
     - `NODE_ENV`: `production`
     - `PORT`: `8080` (or let Railway assign it automatically)

4. **Domain Setup**:
   - Railway automatically assigns a subdomain for your app
   - To use a custom domain:
     - Go to the "Settings" tab
     - Click on "Domains"
     - Add your custom domain and follow the verification steps

5. **Troubleshooting Deployment**:
   - If you see "The train has not arrived at the station" error:
     - Check the deployment logs for specific errors
     - Make sure the build process completes successfully
     - Verify that `server.js` is in your repository's root directory
     - Confirm that the start command is set to `node server.js`

6. **Monitor Your Deployment**:
   - Check the "Deployments" tab to monitor build and deployment status
   - View logs in real-time for debugging if needed

7. **Update README**:
   - Once deployed, copy your Railway app URL
   - Update the "Live Demo" section in this README

### Important Railway.app Settings

- **Auto-Deploy**: By default, Railway will deploy when you push to your connected branch
- **Resources**: Start with the free tier, which includes 500 hours of runtime per month
- **Scaling**: Adjust the container specifications if needed under the "Settings" tab
- **Monitoring**: Set up monitoring alerts in the Railway dashboard for uptime and performance

## Acknowledgements

- Built with [React](https://reactjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- QR code generation powered by [qrcode.react](https://github.com/zpao/qrcode.react)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
