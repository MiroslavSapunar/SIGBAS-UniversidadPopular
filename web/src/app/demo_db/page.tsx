import { getData } from "../../utils/utils";
import { SaveForm } from './saveForm';
import Posts from './posts';

export default async function Demo() {
    const data = await getData();
    // console.log(data);
    return (
        <div className="min-h-screen bg-white text-black flex flex-col content-stretch justify-center">
            <SaveForm />
            <h4 className="text-3xl text-violet-university text-center font-bold mb-4">Posts</h4>
            <Posts data={data} />
        </div>
    )
}
