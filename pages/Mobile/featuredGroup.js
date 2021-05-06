import React from 'react';
import search_icon from "../../assets/images/search.svg";
import down_icon from "../../assets/images/down.svg";
import {MDBBtn, MDBIcon} from 'mdbreact'
import { each } from 'lodash';

function SearchBar() {
    return (
        <div className="searchbar">
            <div className="flex justify-center items-center pb-2">
                <img src={search_icon}/>
                <div className="searchtext">SEARCH GROUPS</div>
            </div>
            <div className="divider" />
        </div>
    );
}

function Filter() {
    return (
        <div className="pt-6 px-2">
            <div>
                <MDBBtn color="elegant" className="btn_view_all"> View All </MDBBtn>
                <MDBBtn color="elegant" outline className="btn_view_all"> Tags <img src={down_icon} className="down_icon"/> </MDBBtn>
                <MDBBtn color="elegant" outline className="btn_view_all"> By Date </MDBBtn>
            </div>
        </div>
    )
}

function ImageItem({src, comment, stories}) {
    return (
        <div className="m-auto pb-4" style={{width: "90%"}}>
            <img src={src} className="search_item_img" />
            <div className="search_item_caption flex justify-between">
                <div className="search_item_comment">#{comment}</div>
                <div className="search_item_stories">{stories.toLocaleString("en")} stories</div>
            </div>
        </div>
    )
}

const results = [
    {
        src: "/images/page1/6.svg",
        comment: "LoveCampaign",
        stories: 125
    },
    {
        src: "/images/page1/7.svg",
        comment: "University of Wisconsin-WhiteWater",
        stories: 1035
    },
    {
        src: "/images/page1/8.svg",
        comment: "UWW-WhiteWater",
        stories: 25
    },
    {
        src: "/images/page1/9.svg",
        comment: "Astra-Zeneca-Research",
        stories: 3342
    },
    {
        src: "/images/page1/10.svg",
        comment: "UW-Parkside",
        stories: 125
    },
    {
        src: "/images/page1/11.svg",
        comment: "WhiteWater",
        stories: 105
    },
]

function SearchResult() {
    return (
        <div className="pt-4">
            {
                results?.map( each => (
                    <ImageItem {...each} />
                ) )
            }
        </div>
    )
}

const title = "DearMusicIn TheMaking"
const stories = 123

function FeaturedGroup() {
    return (
        <div className="pb-4 px-4">
            <div className="py-3" style={{fontSize: 18, fontWeight: "bold"}}>
                FEATURED GROUP
            </div>
            <div className="featured_group_title">
                #{title}
            </div>
            <div>
                {stories} Stories Told
            </div>
            <MDBBtn color="elegant" className="btn-radius-10" style={{marginLeft: 20, marginTop: 18}}>
                group stories
            </MDBBtn>
        </div>
    )
}

export default FeaturedGroup;