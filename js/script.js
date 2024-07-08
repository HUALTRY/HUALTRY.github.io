let list = [
    ['行政楼','行政楼藏着不可告人的秘密','',''],
    ['人工智能学院','人工智能学院给你最好的色情片观影体验','',''],
    ['管理学院','要打胶吗？前往管理学院也许可以满足你','',''],
    ['操场','操场是野战天堂，饥渴的年轻人释放青春','',''],
    ['体育馆','体育馆是我们的约会圣地，找到你心仪的骚货','','']
];

window.onclick = function(event)
{  
    let tip = document.getElementById('tip');
    let modalMask = document.getElementById('modal-mask');  
    if (event.target == mappoc) 
    {  
        tip.style.display = 'none';  
    }  
    if (event.target == modalMask) 
    {  
        modalMask.style.display = 'none';  
    }  
}

window.addEventListener('resize',function() {
    let tip = document.getElementById('tip');  
    tip.style.display = 'none';  
});

function showModal(mode)
{
    let modalMask = document.getElementById('modal-mask');  
    if(mode)
    {
        modalMask.style.display = 'flex';
    }
    else
    {
        modalMask.style.display = 'none';
    }
}

function clik(id)
{
    let tag = document.getElementById(id);      
    let tip = document.getElementById('tip');  
    /*
    document.getElementById('shoolImg1')
    document.getElementById('shoolImg2')
    */
    document.getElementById('bdname1').innerText = list[Number(tag.getAttribute('index')) - 1][0];
    document.getElementById('bdname2').innerText = list[Number(tag.getAttribute('index')) - 1][0];
    document.getElementById('bdname3').innerText = list[Number(tag.getAttribute('index')) - 1][1];
    tip.style.display = 'block';  

    tip.style.top = (tag.getBoundingClientRect().top + tag.offsetHeight) + 'px';  
    tip.style.left = (tag.getBoundingClientRect().right - (tip.offsetWidth / 2) - (tag.offsetWidth / 2)) + 'px';  
}