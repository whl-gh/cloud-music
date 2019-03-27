import React from "react";
import "./style.scss";
import $ from "jquery";

const SlideShow = (props)=>{
    let windowOpen = (e, url, openAway)=>{
        window.open(url, openAway||"_blank");
    }
    let setSlideShowBtn = (index, ul)=>{
        index = Math.abs(props.imgs.length-index);
        index = index>=props.imgs.length?0:index;
        var lis = ul.parent().parent().find(".slideShow-btn > li");
        lis.filter(".active").removeClass("active");
        lis.eq(index).addClass("active");
    }
    let prev = (ele, activeLi, ul)=>{
        ele.removeClass("prev-active");
        activeLi.removeClass("active").addClass("prev-active");
        let current_active = $(".next-active", ul).removeClass("next-active").addClass("active");
        // 判断是否为最后一个元素
        if(current_active[0] === $("li:last-child", ul)[0]){
            $("li:first-child", ul).addClass("next-active");
        }else{
            current_active.next().addClass("next-active");
        }
        setSlideShowBtn(ul.find(".active").index(),ul);
    };
    let next = (ele, activeLi, ul)=>{
        ele.removeClass("next-active");
        activeLi.removeClass("active").addClass("next-active");
        let current_active = $(".prev-active", ul).removeClass("prev-active").addClass("active");
        // 判断是否为第一个
        if(current_active[0] === $("li:first-child", ul)[0]){
            $("li:last-child", ul).addClass("prev-active");
        }else{
            current_active.prev().addClass("prev-active");
        }
        setSlideShowBtn(ul.find(".active").index(),ul);
    };
    let clickHandler = (e)=>{
        var ele = null;
        var ul = null;
        var activeLi = null;
        if(e.target.nodeName.toUpperCase()==="IMG"){
            ele = $(e.target).parent().parent();
        }else{
            ele = $(e.target).parent();
        }
        ul = ele.parent();
        activeLi = $(".active", ul);
        if(!ele.hasClass("active")){
            e.preventDefault();
            if(ele.hasClass("prev-active")){
                prev(ele, activeLi, ul);
            }
            if(ele.hasClass("next-active")){
                next(ele, activeLi, ul);
            }
        }
    }
    let prevHandler = (e)=>{
        var ul = $(e.target).parent().find("> .slideShow-items");
        var ele = $(".prev-active", ul);
        var activeLi = $(".active", ul);
        prev(ele, activeLi, ul);
    };
    let nextHandler = (e)=>{
        var ul = $(e.target).parent().find("> .slideShow-items");
        var ele = $(".next-active", ul);
        var activeLi = $(".active", ul);
        next(ele, activeLi, ul);
    };
    let toggle = (e)=>{
        let ele = $(e.target);
        if(e.target.nodeName.toUpperCase()==="LI" && !ele.hasClass("active")){
            let index = ele.index();
            ele.siblings(".active").removeClass("active");
            ele.addClass("active");
            let prev = 0;
            let next = 0;
            let len = props.imgs.length-1;
            switch(index){
                case 0:   prev = len;   next = index+1;
                    break;
                case len: prev = index-1; next = 0;
                    break;
                default:  prev = index-1; next=index+1;
                    break;
            }
            let ul = $(e.target).parent().parent().find(".slideShow-content > .slideShow-items");
            $(".prev-active", ul).removeClass("prev-active");
            $(".next-active", ul).removeClass("next-active");
            $(".active", ul).removeClass("active");
            let lis = $("li",ul);
            lis.eq(prev).addClass("prev-active");
            lis.eq(next).addClass("next-active");
            lis.eq(index).addClass("active");
        }
    }
    let slideShowItems = null;
    let timeoutHandler = null;
    let resetTimer = (ul)=>{
        if(!slideShowItems){
            slideShowItems = $(ul);
        }
        let nextActive = $(".next-active", slideShowItems);
        let active = $(".active", slideShowItems);
        next(nextActive, active, slideShowItems);
    }
    let auto = (ul)=>{
        return setTimeout(() => {
            resetTimer(ul);
            timeoutHandler = auto();
        }, 3000);
    }
    let hover = ()=>{
        clearTimeout(timeoutHandler);
    }
    let leave = ()=>{
        timeoutHandler = auto();
    }
    return (
        <div className="slideShow-wrap" onMouseEnter={hover} onMouseLeave={leave}>
            <div className="slideShow-content">
                <ul className="slideShow-items" ref={auto}>
                    {
                        props.imgs.map((item, i)=>{
                            let lastIndex = props.imgs.length-1;
                            switch(i){
                                case 0: 
                                    return (
                                        <li key={i.toString()} className="active">
                                            <a href={item.url} onClick={clickHandler} target="_blank" rel="noopener noreferrer">
                                                <img src={item.img} alt={item.title} />
                                            </a>
                                        </li>
                                    );
                                case 1: 
                                    return (
                                        <li key={i.toString()} className="next-active">
                                            <a href={item.url} onClick={clickHandler} target="_blank" rel="noopener noreferrer">
                                                <img src={item.img} alt={item.title} />
                                            </a>
                                        </li>
                                    );
                                case lastIndex: 
                                    return (
                                        <li key={i.toString()} className="prev-active">
                                            <a href={item.url} onClick={clickHandler} target="_blank" rel="noopener noreferrer">
                                                <img src={item.img} alt={item.title} />
                                            </a>
                                        </li>
                                    );
                                default:
                                    return (
                                        <li key={i.toString()}>
                                            <a href={item.url} onClick={clickHandler} target="_blank" rel="noopener noreferrer">
                                                <img src={item.img} alt={item.title} />
                                            </a>
                                        </li>
                                    );
                            }
                        })
                    }
                </ul>
                <span className="slideShow-prev fa fa-angle-left" onClick={prevHandler}></span>
                <span className="slideShow-next fa fa-angle-right" onClick={nextHandler}></span>
            </div>
            <ul className="slideShow-btn" onMouseOver={toggle}>
                {
                    props.imgs.map((item,i)=>{
                        if(i===0){
                            return (<li className="active" key={i.toString()}></li>);
                        }
                        return (<li key={i.toString()}></li>);
                    })
                }
            </ul>
        </div>
    );
}

export default SlideShow;