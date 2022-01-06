export const apiurl = {
    URL: 'http://localhost:8000'
}

export const imgurl = {
    IMGURL: 'http://localhost:8000/public/'
}

export const _categorylist = (event, _options = []) => {
    for (let option of event) {
        _options.push({
            _id: option._id,
            name:option.name,
            parentId: option.parentId,
        })
        if(option.children.length > 0){
            _categorylist(option.children,_options)
        }
        
    }
    return _options
}