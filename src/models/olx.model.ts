import { formatDefaultValue } from "../helper/functions.utils";

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
    setTitle(title: string | undefined){
        this.title = formatDefaultValue(title);
        return this;
    }
    getTitle(){
        return this.title;
    }
    getImgLink(){
        return this.imgLink;
    }
    setImgLink(imgLink: string | undefined){
        const defaultImageLink = 'https://static.olx.com.br/cd/listing/notFound.png';
        this.imgLink = formatDefaultValue(imgLink, defaultImageLink);
        return this;
    }
    getLink(){
        return this.link;
    }
    setLink(link: string | undefined){
        this.link = formatDefaultValue(link);
        return this;
    }
    getLocale(){
        return this.locale;
    }
    setLocale(locale: string | undefined){
        this.locale = formatDefaultValue(locale);
        return this;
    }
    getPrice(){
        return this.price;
    }
    setPrice(price: string | undefined){
        this.price = formatDefaultValue(price);
        return this;
    }
    getId(){
        return this.olxId;
    }
    getCreatedDate(){
        return this.createdDate;
    }
}