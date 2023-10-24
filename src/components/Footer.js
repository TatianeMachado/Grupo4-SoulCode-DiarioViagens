const Footer = ({ color, texto }) => {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div className="text-center p-3" style={{ color: color }}>
        {texto}
      </div>
    </footer>
  );
};

export default Footer;
