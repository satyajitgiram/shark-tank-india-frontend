

const footerStyles = {
    backgroundColor: '#9c27b0', // Purple color
    padding: '20px',
    textAlign: 'center',
    color: '#fff',
  };

  const linkStyle = {
    textAlign: 'center',
    color: '#fff',
  };

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <p  style={{ margin: 0 }}><a style={linkStyle} target="_blank" href="https://satyajit.vercel.app/">Made by Satyajit Giram </a></p>
    </footer>
  );
};

export default Footer;
