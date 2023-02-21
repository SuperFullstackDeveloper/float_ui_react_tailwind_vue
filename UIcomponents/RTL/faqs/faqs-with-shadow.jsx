export default () => {

    const faqsList = [
        {
            q: "ما هي بعض الأسئلة العشوائية التي يجب طرحها؟",
            a: "هذا هو بالضبط سبب إنشاء مولد الأسئلة العشوائية هذا. هناك المئات من الأسئلة العشوائية للاختيار من بينها حتى تتمكن من العثور على السؤال العشوائي المثالي."
        },
        {
            q: "هل تقوم بتضمين أسئلة شائعة؟",
            a: "لا يتضمن هذا المولد الأسئلة الأكثر شيوعًا. الفكرة هي أنه يمكنك طرح أسئلة شائعة بمفردك ، لذا فإن معظم الأسئلة في هذا المولد."
        },
        {
            q: "هل يمكنني استخدام هذا لـ 21 سؤالاً؟",
            a: "نعم! هناك طريقتان يمكنك من خلالهما استخدام منشئ الأسئلة هذا بناءً على ما تبحث عنه. يمكنك الإشارة إلى أنك تريد إنشاء 21 سؤالاً."
        },
        {
            q: "هل هذه الأسئلة للبنات أم للفتيان؟",
            a: "الأسئلة في هذا المولد محايدة بين الجنسين ويمكن استخدامها لسؤال أي ذكر من الإناث (أو أي جنس آخر يحدده الشخص)."
        },
        {
            q: "ما هي بعض الأسئلة العشوائية التي يجب طرحها؟",
            a: "هذا هو بالضبط سبب إنشاء مولد الأسئلة العشوائية هذا. هناك المئات من الأسئلة العشوائية للاختيار من بينها حتى تتمكن من العثور على السؤال العشوائي المثالي لطرحه على الأصدقاء."
        },
        {
            q: "ماذا تتمنى لو كان لديك المزيد من المواهب تفعل؟",
            a: "إذا كنت تبحث عن طريقة للحصول على أسئلة عشوائية ، فقد وصلت إلى صفحة الويب الصحيحة. لقد أنشأنا منشئ الأسئلة العشوائية ليطرح عليك أكبر عدد من الأسئلة العشوائية التي يرغبها قلبك."
        }
    ]

    return (
        <div className="leading-relaxed py-12 mx-4 md:mx-8">
            <div className="text-center space-y-3">
                <h1 className="block text-gray-800 text-3xl font-semibold">
                    أسئلة متكررة
                </h1>
                <p className="text-gray-500 max-w-lg mx-auto">
                    أجاب على جميع الأسئلة المتداولة، هل ما زلت مرتبكًا؟ لا تتردد في الاتصال بنا.
                </p>
            </div>
            <div className="relative bg-white rounded-md mt-10 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl sm:mx-auto" style={{boxShadow: '0px 7px 20px 7px #F1F1F1'}}>
                <div className="grid gap-4 py-8 md:grid-cols-2">
                    {
                        faqsList.map((item, idx) => (
                            <div className="space-y-3 mt-6 px-8" key={idx}>
                                <h4 className="text-gray-800 text-xl font-semibold ">
                                    {item.q}
                                </h4>
                                <p className="text-gray-500">
                                    {item.a}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <span className="w-0.5 h-full bg-gray-200 m-auto absolute top-0 left-0 right-0 hidden md:block"></span>
            </div>
        </div>
    )
}