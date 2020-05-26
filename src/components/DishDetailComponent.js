import React, {Component} from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import {Media} from "reactstrap";

class DishDetail extends Component{

    constructor(props) {
        super(props);
        this.renderComments = this.renderComments.bind(this);
      }

    renderDish(ddish){
        if(ddish!=null){
        return(
            <Card className="ml-5">
                    <CardImg top src={ddish.image} alt={ddish.name}/>
                        <CardBody>
                            <CardTitle>{ddish.name}</CardTitle>
                            <CardText>{ddish.description}</CardText>
                        </CardBody>
            </Card>
        );
        }
        else{
            return(
                <div></div>
            )
        }
    }

    renderComments(ddish){
        if(ddish!=null){
        const ccomments=ddish.comments.map((c)=>{
                return(<div key={c.id}>
                    <Media tag='li'>
                        <Media body>
                            <p>{c.comment}</p>
                            <p>--{c.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(c.date)))}</p>
                        </Media>
                    </Media>
                </div>);
        })
        return(
            <Media list>
                <h4>Comments</h4>
                {ccomments}
            </Media>
        )
        }
        else{
            return(
                <div></div>
            )
        }
        
    }


    render(){
        const dishh=this.props.dish;
        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(dishh)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(dishh)}
                </div>
            </div>
        )
        }
    }


export default DishDetail;