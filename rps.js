let computerMove='';
            let result='';
            const scoreBoard={ 
                             pScoreBoard:0,
                             cScoreBoard:0,
                             tieScore:0
                            };
                            document.querySelector('.js-score').innerHTML=`player score : ${scoreBoard.pScoreBoard} || computer score : ${scoreBoard.cScoreBoard} || Tie : ${scoreBoard.tieScore}`

            function updateScore(){       
                document.querySelector('.js-score').innerHTML=`player score : ${scoreBoard.pScoreBoard} || computer score : ${scoreBoard.cScoreBoard} || Tie : ${scoreBoard.tieScore}`
                }

            function pickComputerChoice(){
                const randomNumber=Math.random();
                
                    if(randomNumber>=0 && randomNumber<1/3){
                    computerMove='Rock';
                    }
                    else if(randomNumber>=1/3 && randomNumber<2/3){
                    computerMove='Paper';
                    }
                    else if(randomNumber>=2/3 && randomNumber<=1){
                    computerMove='Scissor';
                    }
                    console.log(computerMove)
            }

            function playGame(playerMove){
                    if(playerMove==='Rock'){            
                        if(computerMove==='Rock'){
                        result='Tie'
                        }
                        else if(computerMove==='Paper'){
                          result='you lost';
                        }
                        else if(computerMove==='Scissor'){
                          result='you won';
                        }
                    }
                    else if(playerMove==='Paper'){
                        if(computerMove==='Rock'){
                        result='you won'
                        }
                        else if(computerMove==='Paper'){
                        result='Tie';
                        }
                        else if(computerMove==='Scissor'){
                        result='you lost';
                        }
                    }
                    else if(playerMove==='Scissor'){
                        if(computerMove==='Rock'){
                        result='you lost'
                        }
                        else if(computerMove==='Paper'){
                        result='you won';
                        }
                        else if(computerMove==='Scissor'){
                        result='Tie';
                        }
                    }
                    if(result==='you won'){
                        scoreBoard.pScoreBoard++;
                    }else if(result==='you lost'){
                        scoreBoard.cScoreBoard+=1;
                    }else if(result==='Tie'){
                        scoreBoard.tieScore+=1;
                    }    
            updateScore();
            }