const Footer = () => {
  return (
    <div className="w-full bg-black text-white font-poppins ">
      <div className="w-11/12 flex justify-between pt-5 mx-auto ">
        <ul className="flex gap-10 items-baseline">
          <h1 className="text-2xl font-extrabold font-poppins">Roti Time </h1>
          <p>© 2023 Roti time Pvt. Ltd</p>
        </ul>
        {/* EXTERNAL LINKS */}
        <div className="w-6/12 flex justify-between">
          <ul>
            <h3 className="text-xl font-semibold">Company</h3>
            <li>About</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Roti one</li>
            <li>Roti Instamart</li>
            <li>Roti Genie</li>
          </ul>
          <ul>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
          <ul>
            <h3 className="text-xl font-semibold ">We deliver to:</h3>
            <li>Banglore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
