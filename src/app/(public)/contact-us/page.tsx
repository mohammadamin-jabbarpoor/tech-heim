import ContactInfo from "@/src/components/features/contact-us/ContactInfo";
import MessageInfo from "@/src/components/features/contact-us/MessageInfo";
import Breadcrumb from "@/src/components/shared/ui/Breadcrumb";

function ContactUsPage() {
  return (
    <div className="mt-4 lg:mt-6 mb-6 md:mb-10 lg:mb-14">
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
