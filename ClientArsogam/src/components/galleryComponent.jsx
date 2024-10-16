export function GalleryComponent({url, alt}){
    return(
        <div className="containerImg">
            <img src={url} alt={alt} />
        </div>
    )
}