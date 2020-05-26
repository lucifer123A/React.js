import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import {Media} from "reactstrap";


    function RenderDish({ddish}){
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

    function RenderComments({ddish}){
                return(
                <div >
                    <Media tag='li'>
                        <Media body>
                            <p>{ddish.comment}</p>
                            <p>--{ddish.author}, {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(ddish.date)))}</p>
                        </Media>
                    </Media>
                </div>
                )
    }


    const DishDetail=(props)=>{
        if(props.dish!=null)
        {
        const ccomments = props.dish.comments.map((c)=>{
            return(
                    <div key={c.id}>
                        <RenderComments ddish={c}/>
                    </div>   
            )
        });
            return(
                <div className="row">

                    <div className="col-12 col-md-5 m-1">
                            <RenderDish ddish={props.dish}/>
                    </div>

                    <div className="col-12 col-md-5 m-1">
                        <Media list>
                            <h4>Comments</h4>
                            {ccomments}
                        </Media>
                    </div>
                
                </div> 
            )
        }
        else{
            return(
                <div></div>
            )
        }
        }
    


export default DishDetail;