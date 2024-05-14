
function TextHeroCard({props:{title,count}}:{props:{title:string,count:number}}) {
  return (
    <div>
      <p className='font-extralight text-gray-400'>{ title}</p>
      <p className='font-bold'>{count.toLocaleString('En')}</p>
    </div>
  )
}

export default TextHeroCard