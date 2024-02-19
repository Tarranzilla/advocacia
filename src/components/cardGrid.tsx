import { Expertise_List } from "@/content_lists/expertise_list";
import Image from "next/image";
import Link from "next/link";

type CardGridProps = {
    content: Expertise_List[];
};

export default function CardGrid({ content }: CardGridProps) {
    return (
        <div className="Card_Grid">
            {content.map((item) => (
                <Link href={item.pageLink} className="Card_Link" key={item.key}>
                    <div className="Card Expertise_Card">
                        <Image src={item.imgSrc} alt={item.title} width={item.size.width} height={item.size.height} />
                        <h2 className="Card_Title">{item.title}</h2>
                        <p className="Card_Description">{item.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
