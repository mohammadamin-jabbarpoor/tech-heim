import ContactInfo from "@/components/contact-us/ContactInfo";
import MessageInfo from "@/components/contact-us/MessageInfo";
import Breadcrumb from "@/components/ui/BreadCrumb";

function ContactUsPage() {
  return (
    <div className="mt-6 mb-14">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact us", href: "/contact-us" },
        ]}
      />
      <ContactInfo />
      <MessageInfo />
    </div>
  );
}

export default ContactUsPage;
