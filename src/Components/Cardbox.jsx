import React from "react"
import Card from "./Card"
import { drawCard } from "../scripts/generateRandomCard"
import { useDispatch, useSelector } from "react-redux"
import { addCard, setDrawTime } from "../actions"
import cogoToast from "cogo-toast"

const NothingToShow = () => <p className="disMessage">No Cards to Display</p>

const Cardbox = () => {
    const heroData = useSelector((state) => state.allCardsReducer)
    const userData = useSelector((state) => state.userCardsReducer)
    const userInfo = useSelector((state) => state.userInfoReducer)
    let dispatch = useDispatch()
    let available = Boolean(userData.length) //boolean

    const countCards = (arr, toFind) => {
        let counter = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === toFind) counter++
        }
        return counter
    }

    const uniqueUserData = [...new Set(userData)] //removes duplicate values

    return (
        <div className="container py-4">
            <div className="row">
                <h4 className="col">Your Box ({userData.length})</h4>
                <button
                    className="btn btn-dark btn-sm col"
                    onClick={() => {
                        const cTime = Math.round(Date.now() / 1000)
                        if (cTime - userInfo.lastDrawTime > 1) {
                            dispatch(addCard(drawCard(heroData)))
                            cogoToast.success(
                                "Card was added to your Box Successfully!",
                                { position: "bottom-right" }
                            )
                            dispatch(setDrawTime())
                        } else {
                            cogoToast.warn(
                                "You can only draw cards once in an Hour 😕",
                                { position: "bottom-right" }
                            )
                        }
                    }}
                >
                    Draw a card Total Cards available: {heroData.length}
                </button>
            </div>
            <hr />
            <div className="row">
                {available ? (
                    uniqueUserData.map((Hero) => {
                        const noOfHeroCardWithUser = countCards(userData, Hero)
                        return (
                            <Card
                                key={Hero.name}
                                HeroData={Hero}
                                count={noOfHeroCardWithUser}
                            />
                        )
                    })
                ) : (
                    <NothingToShow />
                )}
            </div>
        </div>
    )
}

export default Cardbox
