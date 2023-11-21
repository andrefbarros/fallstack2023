import React, {useId} from "react";
import CompanyDescription from "@/components/CompanyDescription";
import HeadingText from "@/components/HeadingText";
import CompanySocials from "@/components/CompanySocials";

interface CompanyInfoProps {
    title: string | undefined;
    bodyText: React.ReactNode
    videoHref: string | undefined;
    videoTitle: string | undefined;
    twitterLink: string | undefined;
    facebookLink: string | undefined;
    instagramLink: string | undefined;
    youtubeLink: string | undefined;
    linkedinLink: string | undefined;
    website: string | undefined;
    tier: string;
}

const CompanyInfo : React.FC<CompanyInfoProps> = (
    {
        title,
        bodyText,
        videoHref,
        videoTitle,
        twitterLink,
        facebookLink,
        instagramLink,
        youtubeLink,
        linkedinLink,
        website,
        tier
    }) => {

    const hasSocials : boolean = !!(twitterLink || linkedinLink || facebookLink || youtubeLink || instagramLink || website);

    return (
        <section
            className="center container mx-auto w-11/12 rounded-lg p-10 sm:w-3/4 lg:p-14 bg-white"
        >
            {bodyText && (
                <CompanyDescription>
                    <HeadingText className="text-black" text='Sobre'/>
                    <div className="text-justify text-black">{bodyText}</div>
                </CompanyDescription>
            )}
            {tier === 'Diamond' &&
                <>
                    <HeadingText className="text-black" text={videoTitle || 'Vídeo promocional'}/>
                    <div className="flex items-center justify-center" key={useId()}>
                        <iframe
                            className="max-w-full rounded-lg"
                            width="560"
                            height="315"
                            src={videoHref}
                            title={videoTitle}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    </div>
                </>
            }
        </section>
        
    );
};



export default CompanyInfo;