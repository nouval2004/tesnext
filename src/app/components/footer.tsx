// src/app/components/Footer.tsx
const Footer = () => {
    return (
      <footer
        style={{
          backgroundColor: "#000000",
          textAlign: "center",
          padding: "1rem",
          borderTop: "1px solidrgb(31, 63, 94)",
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} My Next.js App. All rights reserved.
        </p>
      </footer>
    );
  };
  
  export default Footer;
  