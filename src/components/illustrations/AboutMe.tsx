import { useEffect, useState } from "react";

export default function AboutMeIllustration() {
    const [isOpen, setOpenState] = useState(false);

    useEffect(() => {
        const section = document.getElementById("about");

        window.addEventListener("scroll", () => {
            if (section && window.pageYOffset >= section.offsetHeight - section.offsetTop - 50) {
                setOpenState(true);
            } else {
                setOpenState(false);
            }
        });
    });

    if (!isOpen) {
        return <section className="w-full max-w-[589px] h-screen max-h-72 md:max-h-[605px]" />;
    } else {
        return (
            <>
                
            </>
        );
    }
}