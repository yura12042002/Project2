import './Vacancies.css'

function Vacancies ({name}) {
  // можно вынести за компонент, то есть сверху
  // лучше статичные данные выносить в отдельные файлы и там их экспортировать пример: export const data = []
    return (
        <div className="main">
            {arr.map((_, index) => (
              // arr[index].new вот так не делаем
              // el.new вот так нужно делать

              // как улучшить???
              // создать отдельный компонент VacancyItem
              // arr.map(el => <VacancyItem tags=[el.level, el.role, ...el.languages, ...el.tools] вот здесь ты передаешь кучу пропсов/>)
                <div className = {index < 2 ? "blocksLine" : 'blocks'}>{
                    <div className='blocksTools'>
                        <img className='blocksToolsPictures'src={arr[index].logo}/>
                        <div className='blocksToolsDescription'>
                            <div className='blocksToolsDescriptionHead'>
                                <p className='blocksToolsDescriptionHeadСompany'>{arr[index].company}</p>
                                {/* // когда у нас выводится или ничего не выводится, используем && */}
                                {arr[index].new && <p className='blocksToolsDescriptionHeadNew'>NEW!</p>}
                                {arr[index].featured && <p className='blocksToolsDescriptionHeadFeatured'>FEATURED!</p>}
                            </div> 
                            <p className='blocksToolsDescriptionPosition'>{arr[index].position}</p>
                            <div className='blocksToolsDescriptionFooter'>
                                <p className='blocksToolsDescriptionFooterPostedAt'>{arr[index].postedAt}</p>
                                <p className='point'>&bull;</p>
                                <p className='blocksToolsDescriptionFooterContract'>{arr[index].contract}</p>
                                <p className='point'>&bull;</p>
                                <p className='blocksToolsDescriptionFooterLocation'>{arr[index].location}</p>
                            </div> 
                        </div> 
                        {/* // у тебя данные с 4 источников отображаются вместе, нужно их собрать с помощью спред оператора и мапить 1 раз */}
                        <div className='blocksToolsLanguage'>
                            
                            {
                                arr[index].languages.map(el => (
                                    <div className='blocksToolsLanguageItem'>{el}</div>
                                ))
                            }
                            { 
                                arr[index].tools.map(el => (
                                    <div className='blocksToolsLanguageItem'>{el}</div>
                                ))
                            }
                            <div className='blocksToolsLanguageItem'>{arr[index].level}</div>
                            <div className='blocksToolsLanguageItem'>{arr[index].role}</div>
                        </div>
                    </div>      
                }</div>    
            ))}    
        </div>
    )
}

export default Vacancies