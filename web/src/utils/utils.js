import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getData() {
    const feed = await prisma.post.findMany({
        where: {
            published: true,
        },
    })
    return { props: { feed } }

}

export function saveData({title, content}) {
    console.log(title + ' - ' + content);
}
