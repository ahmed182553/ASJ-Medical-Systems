import ContactInfo from "./Contactinfo";
import ContactForm from "./Contactform";
import Footer from "../../components/Section6/Fotter";

export default function Contact() {
    return (
        <>
            <div className="min-h-screen w-full bg-gray-50 flex justify-center px-4 py-16">
                <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </div>

            <Footer />
        </>
    );
}
