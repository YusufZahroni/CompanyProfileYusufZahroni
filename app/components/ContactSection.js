import Field from "./Field";
import SectionSubtitle from "./SectionSubtitle";
import SectionTitle from "./SectionTitle";
import Button from "./Button";
import ContactItem from "./ContactItem";

export default function ContactSection() {
  return (
    <section className="container mx-auto" id="contact">
      <div className="bg-primarygray p-14 flex flex-wrap rounded-lg">
        <div className="md:w-6/12 w-full md:border-r-2 border-linegray">
          <div className="py-16 md:px-20">
            <SectionTitle leftside>Contact</SectionTitle>
            <SectionSubtitle leftside>Suara Konsumen</SectionSubtitle>

            <ContactItem
              className="mt-10"
              icon="/mail.svg"
              label="Mail"
              value="xlindonesia@mail.co"
            />
            <ContactItem
              className="mt-8"
              icon="/phone.svg"
              label="Phone"
              value="+62-859-4235-2202"
            />
            <ContactItem
              className="mt-8"
              icon="/twitter.svg"
              label="Twitter"
              value="@twitter.xl_indonesia"
            />
          </div>
        </div>
        <div className="md:w-6/12 w-full">
          <form className="py-16 md:px-20 md:p-14">
            <div className="flex flex-wrap -mx-4">
              <div className="xl:w-6/12 lg:w-6/12 w-full px-4">
                <Field type="text" name="name" label="Name" />
              </div>
              <div className="xl:w-6/12 lg:w-6/12 w-full px-4">
                <Field type="text" name="email" label="Email" />
              </div>
            </div>
            <Field type="text" name="subject" label="Subject" />
            <Field type="textarea" name="message" label="Message" />
            <div className="text-right">
              <Button notpill variant="fullfilled-black">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
