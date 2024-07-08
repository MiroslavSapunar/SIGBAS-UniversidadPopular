// interface Data {
//     data: Post[]
// }

export default function Posts(data: any) {
    console.log(data ? data : "none");
    return (
        <div>
            <p>posts </p>
        </div>
    );
}
