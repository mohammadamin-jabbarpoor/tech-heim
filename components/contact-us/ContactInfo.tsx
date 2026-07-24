import { CallIncoming, LocationAdd, Sms } from "iconsax-react";

const infoItems = [
  {
    id: "office",
    title: "Office",
    description: "123 Main Street, Anytown, USA",
    icon: LocationAdd,
  },
  {
    id: "email",
    title: "Email",
    description: "info@techheim.com",
    icon: Sms,
  },
  {
    id: "phone",
    title: "Phone",
    description: "+1 (555) 123-4567",
    icon: CallIncoming,
  },
];

function ContactInfo() {
  return (
    <div className="w-198.5 flex items-center justify-between mx-auto mt-10 mb-24">
      {infoItems.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="max-w-40 flex flex-col items-center justify-center gap-2"
          >
            <Icon variant="Outline" size={48} color="#0C68F4" />
            <p className="font-medium text-xl">{item.title}</p>
            <p className="font-light text-gray-600 text-center">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ContactInfo;
