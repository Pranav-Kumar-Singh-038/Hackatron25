import SectionLayout from "../SectionLayout";
import Image from "next/image";

const Venue = () => {
  return (
    <SectionLayout
      id="venue"
      Title="DESTINATION"
      Classname={"venue-section-container"}
    >
      <div className="venue-section">
        <div className="venue-wrapper">
          <div className="venue">
            <h2>Venue</h2>
            <p>
              BIT Sindri Campus, Dhanbad
              <br />
              Jharkhand
            </p>
          </div>
          <div className="date">
            <h2>Date and Time</h2>
            <p>
              13th April 2025
              <br />
              8 AM Onwards
            </p>
          </div>
          <div className="extra-info">
            <h2>Extra information</h2>
            <p>
            Join Hackatron 2025! 🚀 Solve real-world challenges, showcase creativity,
             and win big. Network with innovators, collaborate with experts, and boost your skills. Don’t miss this chance to shine!
            </p>
          </div>
        </div>
        <div className="divider"></div>

        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4411.211609121802!2d86.47110607595549!3d23.654634192444913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f696e95958a6d5%3A0x7c14e668e6f2feea!2sBIT%20Sindri!5e1!3m2!1sen!2sin!4v1739475546501!5m2!1sen!2sin"
            width="700"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="aconst6">
        <Image
          src="/images/aconst6.svg"
          alt="Hackatron const"
          className="opaque8"
          width={300}
          height={300}
        />
      </div>
    </SectionLayout>
  );
};

export default Venue;
