import { redirect } from "next/navigation";
import markdownToHtml from '../../lib/markdownToHtml';


export default async function Legal({ params }: { params: { page: string } }) {
    const data = content.find(content => content.id === params.page);

    if (!data) {
        redirect('/404')
    }

    const contentHtml = await markdownToHtml(data.description);

    return (
        <section className="flex flex-col h-screen lg:h-[85vh]">
            <div className="flex justify-center h-1/3">
                <h1 className="absolute text-6xl mt-32 text-transparent bg-clip-text bg-gradient-to-r from-engines">{data.title}</h1>
            </div>
            <div className="lg:order-1 lg:pl-36 flex justify-center p-8 lg:px-32 ">
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </div>
        </section>
    );
}

const content = [
    {
        id: 'imprint',
        title: 'Impressum',
        description: '# Imprint \n This is markdown content \n * Something \n * Something else \n * Something completely different \n ## Joa mal schauen'
    },
    {
        id: 'statutes',
        title: 'Satzung',
        description: '# Joa'
    },
    {
        id: 'privacy',
        title: 'Datenschutzerklärung',
        description: '# Sal schauen'
    }
]
