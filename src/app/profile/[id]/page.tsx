export default function frofileuser({params}: any) {
    return (
        <div>
            <p>
                profile page
                <span className="p-2 rounded bg-orange-500 text-black">
                {params.id}
                </span>
            </p>
        </div>
    )
}