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
    <div className="w-full xl:w-198.5 flex items-center justify-between mx-auto mt-6 md:mt-8 lg:mt-10 mb-6 md:mb-15 lg:mb-24">
      {infoItems.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.id}
            className="w-24 sm:w-29 md:w-34 lg:max-w-40 flex flex-col items-center justify-center gap-2"
          >
            <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12">
              <Icon variant="Outline" color="#0C68F4" />
            </div>
            <p className="font-medium text-sm md:text-base lg:text-xl">
              {item.title}
            </p>
            <p className="font-light text-[10px] md:text-sm lg:text-base text-gray-600 text-center">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ContactInfo;
