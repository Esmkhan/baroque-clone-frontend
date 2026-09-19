import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CloseButton from "react-bootstrap/CloseButton";

function PrivacyPolicy() {
  return (
    <Container className="my-5 py-4">
      <div className="text-end ">
        <CloseButton onClick={() => window.history.back()} />
      </div>
      <div className="w-3/4 mx-auto">
        <Row className="justify-content-center">
          <Col lg={10}>
            {/* PAGE TITLE */}
            <h2 className="text-center tracking-widest font-semibold mb-3">
              PRIVACY POLICY
            </h2>

            <p className="text-center text-gray-500 mb-5">
              Last updated: September 5, 2023
            </p>

            {/* INTRODUCTION */}
            <p className="leading-7 mb-4">
              This Privacy Policy describes how BAROQUE (Bilal Textile) (the
              "Site", "we", "us", or "our") collects, uses, and discloses your
              personal information when you visit, use our services, or make a
              purchase from baroque.pk (the "Site") or otherwise communicate
              with us (collectively, the "Services").
            </p>

            <p className="leading-7 mb-5">
              For purposes of this Privacy Policy, "you" and "your" means you as
              the user of the Services, whether you are a customer, website
              visitor, or another individual whose information we have collected
              pursuant to this Privacy Policy.
            </p>

            <p className="leading-7 mb-5">
              Please read this Privacy Policy carefully. By using and accessing
              any of the Services, you agree to the collection, use, and
              disclosure of your information as described in this Privacy
              Policy. If you do not agree to this Privacy Policy, please do not
              use or access the Services.
            </p>

            {/* CHANGES */}
            <h4 className="tracking-wider font-semibold mt-5 mb-3">
              Changes to This Privacy Policy
            </h4>

            <p className="leading-7 mb-5">
              We may update this Privacy Policy from time to time, including to
              reflect changes to our practices or for other operational, legal,
              or regulatory reasons. We will post the revised Privacy Policy on
              the Site, update the "Last updated" date and take any other steps
              required by applicable law.
            </p>

            {/* HOW WE COLLECT */}
            <h4 className="tracking-wider font-semibold mt-5 mb-3">
              How We Collect and Use Your Personal Information
            </h4>

            <p className="leading-7 mb-4">
              To provide the Services, we collect and have collected over the
              past 12 months personal information about you from a variety of
              sources, as set out below. The information that we collect and use
              varies depending on how you interact with us.
            </p>

            <p className="leading-7 mb-5">
              In addition to the specific uses set out below, we may use
              information we collect about you to communicate with you, provide
              the Services, comply with any applicable legal obligations,
              enforce any applicable terms of service, and to protect or defend
              the Services, our rights, and the rights of our users or others.
            </p>

            {/* PERSONAL INFORMATION */}
            <h4 className="tracking-wider font-semibold mt-5 mb-3">
              What Personal Information We Collect
            </h4>

            <p className="leading-7 mb-4">
              The types of personal information we obtain about you depends on
              how you interact with our Site and use our Services. When we use
              the term "personal information", we are referring to information
              that identifies, relates to, describes or can be associated with
              you.
            </p>

            {/* DIRECT INFORMATION */}
            <h5 className="font-semibold mt-4 mb-3">
              Information We Collect Directly from You
            </h5>

            <p className="leading-7 mb-3">
              Information that you directly submit to us through our Services
              may include:
            </p>

            <ul className="leading-8 mb-4">
              <li>
                <strong>Basic contact details</strong> including your name,
                address, phone number, email.
              </li>

              <li>
                <strong>Order information</strong> including your name, billing
                address, shipping address, payment confirmation, email address,
                phone number.
              </li>

              <li>
                <strong>Account information</strong> including your username,
                password, security questions.
              </li>

              <li>
                <strong>Shopping information</strong> including the items you
                view, put in your cart or add to your wishlist.
              </li>

              <li>
                <strong>Customer support information</strong> including the
                information you choose to include in communications with us.
              </li>
            </ul>

            <p className="leading-7 mb-5">
              Some features of the Services may require you to directly provide
              us with certain information about yourself. You may elect not to
              provide this information, but doing so may prevent you from using
              or accessing these features.
            </p>

            {/* COOKIES */}
            <h5 className="font-semibold mt-4 mb-3">
              Information We Collect through Cookies
            </h5>

            <p className="leading-7 mb-5">
              We also automatically collect certain information about your
              interaction with the Services ("Usage Data"). To do this, we may
              use cookies, pixels and similar technologies ("Cookies"). Usage
              Data may include information about how you access and use our Site
              and your account, including device information, browser
              information, network connection, IP address and other information
              regarding your interaction with our Services.
            </p>

            {/* THIRD PARTIES */}
            <h5 className="font-semibold mt-4 mb-3">
              Information We Obtain from Third Parties
            </h5>

            <p className="leading-7 mb-3">
              Finally, we may obtain information about you from third parties,
              including vendors and service providers who may collect
              information on our behalf, such as:
            </p>

            <ul className="leading-8 mb-5">
              <li>
                Companies who support our Site and Services, such as Shopify.
              </li>
              <li>
                Our payment processors, who collect payment information to
                process your payment.
              </li>
              <li>
                Third parties who collect information using pixels, web beacons,
                software developer kits, third-party libraries and cookies.
              </li>
            </ul>

            {/* HOW WE USE */}
            <h4 className="tracking-wider font-semibold mt-5 mb-3">
              How We Use Your Personal Information
            </h4>

            <ul className="leading-8 mb-5">
              <li>
                <strong>Providing Products and Services.</strong> We use your
                personal information to process payments, fulfill orders, send
                notifications, manage accounts, arrange shipping and facilitate
                returns and exchanges.
              </li>

              <li>
                <strong>Marketing and Advertising.</strong> We may use your
                personal information for marketing, promotional communications
                and advertising.
              </li>

              <li>
                <strong>Security and Fraud Prevention.</strong> We use personal
                information to detect, investigate or take action regarding
                possible fraudulent, illegal or malicious activity.
              </li>

              <li>
                <strong>Communicating with you.</strong> We use your personal
                information to provide customer support and improve our
                Services.
              </li>
            </ul>

            {/* COOKIES */}
            <h4 className="tracking-wider font-semibold mt-5 mb-3">Cookies</h4>

            <p className="leading-7 mb-5">
              Like many websites, we use Cookies on our Site. Cookies help us
              remember your actions and preferences, run analytics and better
              understand user interaction with our Services.
            </p>

            <p className="leading-7 mb-5">
              Most browsers automatically accept Cookies by default, but you can
              choose to set your browser to remove or reject Cookies through
              your browser controls.
            </p>

            {/* DISCLOSURE */}
            <h4 className="tracking-wider font-semibold mt-5 mb-3">
              How We Disclose Personal Information
            </h4>

            <p className="leading-7 mb-3">
              In certain circumstances, we may disclose your personal
              information to third parties for legitimate purposes subject to
              this Privacy Policy.
            </p>

            <ul className="leading-8 mb-5">
              <li>
                Vendors and third parties who perform services on our behalf.
              </li>
              <li>Business and marketing partners.</li>
              <li>Affiliates within our corporate group.</li>
              <li>
                When required for legal obligations or business transactions.
              </li>
            </ul>

            {/* USER CONTENT */}
            <h4 className="tracking-wider font-semibold mt-5 mb-3">
              User Generated Content
            </h4>

            <p className="leading-7 mb-5">
              The Services may enable you to post product reviews and other
              user-generated content. If you choose to submit user generated
              content to any public area of the Services, this content will be
              public and accessible by anyone.
            </p>

            {/* THIRD PARTY */}
            <h4 className="tracking-wider font-semibold mt-5 mb-3">
              Third Party Websites and Links
            </h4>

            <p className="leading-7 mb-5">
              Our Site may provide links to websites or other online platforms
              operated by third parties. If you follow links to sites not
              affiliated or controlled by us, you should review their privacy
              and security policies.
            </p>

            {/* CHILDREN */}
            <h4 className="tracking-wider font-semibold mt-5 mb-3">
              Children's Data
            </h4>

            <p className="leading-7 mb-5">
              The Services are not intended to be used by children, and we do
              not knowingly collect any personal information about children.
            </p>

            {/* SECURITY */}
            <h4 className="tracking-wider font-semibold mt-5 mb-3">
              Security and Retention of Your Information
            </h4>

            <p className="leading-7 mb-5">
              Please be aware that no security measures are perfect or
              impenetrable, and we cannot guarantee "perfect security". How long
              we retain your personal information depends on different factors,
              such as whether we need the information to maintain your account,
              provide the Services, comply with legal obligations, resolve
              disputes or enforce applicable contracts and policies.
            </p>

            {/* RIGHTS */}
            <h4 className="tracking-wider font-semibold mt-5 mb-3">
              Your Rights and Choices
            </h4>

            <ul className="leading-8 mb-5">
              <li>
                <strong>Right to Access / Know.</strong> You may request access
                to personal information we hold about you.
              </li>
              <li>
                <strong>Right to Delete.</strong> You may request deletion of
                your personal information.
              </li>
              <li>
                <strong>Right to Correct.</strong> You may request correction of
                inaccurate information.
              </li>
              <li>
                <strong>Right of Portability.</strong> You may request a copy of
                your personal information.
              </li>
              <li>
                <strong>Restriction of Processing.</strong> You may ask us to
                stop or restrict processing.
              </li>
              <li>
                <strong>Withdrawal of Consent.</strong> You may withdraw consent
                where applicable.
              </li>
              <li>
                <strong>Appeal.</strong> You may appeal a decision regarding
                your request.
              </li>
              <li>
                <strong>Managing Communication Preferences.</strong> You may opt
                out of promotional emails.
              </li>
            </ul>

            {/* COMPLAINTS */}
            <h4 className="tracking-wider font-semibold mt-5 mb-3">
              Complaints
            </h4>

            <p className="leading-7 mb-5">
              If you have complaints about how we process your personal
              information, please contact us using the contact details provided
              below.
            </p>

            {/* INTERNATIONAL USERS */}
            <h4 className="tracking-wider font-semibold mt-5 mb-3">
              International Users
            </h4>

            <p className="leading-7 mb-5">
              Please note that we may transfer, store and process your personal
              information outside the country you live in, including the United
              States. Your personal information may also be processed by staff
              and third-party service providers in these countries.
            </p>

            {/* CONTACT */}
            <h4 className="tracking-wider font-semibold mt-5 mb-3">Contact</h4>

            <p className="leading-7 mb-5">
              Should you have any questions about our privacy practices or this
              Privacy Policy, or if you would like to exercise any of the rights
              available to you, please email us at{" "}
              <a
                href="mailto:info@baroque.pk"
                className="text-black underline hover:text-gray-500"
              >
                info@baroque.pk
              </a>
            </p>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default PrivacyPolicy;
