import { DEFAULT_IMAGE_VALUE, formatDefaultValue } from "../helper/functions.utils";

export class OlxModel {
    private olxId: string;
    private createdDate: string;
    private title: string;
    private imgLink: string;
    private link: string;
    private price: string;
    private locale: string;

    constructor(id: string | undefined, createdDate: string | undefined) {
        this.olxId = formatDefaultValue(id, (Math.floor(Math.random() * 9999999999999999 )+1).toString());
        this.createdDate = formatDefaultValue(createdDate);
        this.title = '';
        this.imgLink = '';
        this.link = '';
        this.price = '';
        this.locale = '';
    }

    getId(){
        return this.olxId;
    }
    
    getCreatedDate(){
        return this.createdDate;
    }

    getTitle(){
        return this.title;
    }

    getLink(){
        return this.link;
    }

    getImgLink(){
        return this.imgLink;
    }

    getLocale(){
        return this.locale;
    }

    getPrice(){
        return this.price;
    }

    setTitle(title: string | undefined){
        this.title = formatDefaultValue(title);
        return this;
    }

    setImgLink(imgLink: string | undefined){
        this.imgLink = formatDefaultValue(imgLink, DEFAULT_IMAGE_VALUE);
        return this;
    }
    
    setLink(link: string | undefined){
        this.link = formatDefaultValue(link);
        return this;
    }
    
    setLocale(locale: string | undefined){
        this.locale = formatDefaultValue(locale);
        return this;
    }
    
    setPrice(price: string | undefined){
        this.price = formatDefaultValue(price);
        return this;
    }
}