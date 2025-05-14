
import QRCodeGenerator from '../components/QRCodeGenerator';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="flex-grow flex items-center justify-center">
        <QRCodeGenerator />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
