import Footer from "../../components/Footer";
import Header from "../../components/Header";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <Header />
      {children} <Footer />
    </div>
  );
};

export default layout;
