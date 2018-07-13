import React, { Component } from 'react'
import RegistrationForm from './RegistrationForm'
import ActivityTypeButton from './Activity/ChooseActivity'
import TrainWithExamples from './Activity/TrainWithExamples'
import TrainWithExercises from './Activity/TrainWithExercises'
import TrainWithLesson from './Activity/TrainWithLesson'
import TestStudent from './Activity/TestStudent'
import AppBarMenu from './AppBarMenu'
import HomeMenu from './HomeMenu'

import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hasBeenWelcomed: false,
      isRegistered: !(!(localStorage.getItem('username'))),
      hasChosenActivityType: false,
      hasChosenActivity: '',
      scoreDisplayed: localStorage.getItem('score')
    }
  }

  updateScore = (by) => {
    this.setState({scoreDisplayed: localStorage.getItem('score') + by})
    localStorage.setItem('score', parseInt(localStorage.getItem('score'), 10) + parseInt(by, 10))
    setTimeout(() => { this.setState({scoreDisplayed: localStorage.getItem('score')}) }, 2000)
  }

  render () {
    const { classes } = this.props
    let displayed
    if (!this.state.hasBeenWelcomed) {
      displayed = (
        <HomeMenu
          onClickStart={() =>
            this.setState({
              hasBeenWelcomed: true
            })
          }
        />
      )
    } else if (!this.state.isRegistered) {
      displayed = (
        <RegistrationForm
          onSubmit={username => {
            this.setState({ isRegistered: true })
            localStorage.setItem('username', username)
            localStorage.setItem('score', '200')
          }}
        />
      )
    } else if (!this.state.hasChosenActivityType) {
      displayed = (
        <ActivityTypeButton
          onClickExample={() =>
            this.setState({
              hasChosenActivityType: true,
              hasChosenActivity: 'example'
            })
          }
          onClickExercise={() =>
            this.setState({
              hasChosenActivityType: true,
              hasChosenActivity: 'exercise'
            })
          }
          onClickLesson={() =>
            this.setState({
              hasChosenActivityType: true,
              hasChosenActivity: 'lesson'
            })
          }
          onClickTest={() =>
            this.setState({
              hasChosenActivityType: true,
              hasChosenActivity: 'test'
            })
          }
        />
      )
    } else if (this.state.hasChosenActivityType) {
      if (this.state.hasChosenActivity === 'example') {
        displayed = (
          <TrainWithExamples
            getBackToMenu={() =>
              this.setState({
                hasChosenActivityType: false
              })
            }
            updateScore={() => this.updateScore('-10')}
          />
        )
      } else if (this.state.hasChosenActivity === 'exercise') {
        displayed = (
          <TrainWithExercises
            getBackToMenu={() =>
              this.setState({
                hasChosenActivityType: false
              })
            }
            updateScore={() => this.updateScore('-30')}
          />
        )
      } else if (this.state.hasChosenActivity === 'lesson') {
        displayed = (
          <TrainWithLesson
            getBackToMenu={() =>
              this.setState({
                hasChosenActivityType: false
              })
            }
            updateScore={() => this.updateScore('-50')}
          />
        )
      } else if (this.state.hasChosenActivity === 'test') {
        displayed = (
          <TestStudent
            startNewGame={() => {
              localStorage.clear('username')
              this.setState({
                hasBeenWelcomed: false,
                isRegistered: false,
                hasChosenActivityType: false,
                hasChosenActivity: '',
                scoreDisplayed: '200'
              })
            }}
            updateScore={() => this.updateScore('+50')}
          />
        )
      }
    }
    return (
      <div className={classes.root}>
        <AppBarMenu
          isRegistered={this.state.isRegistered}
          onLogout={() => {
            localStorage.clear('username')
            this.setState({
              hasBeenWelcomed: false,
              isRegistered: false,
              hasChosenActivityType: false,
              hasChosenActivity: '',
              scoreDisplayed: '200'
            })
          }}
          scoreDisplayed={this.state.scoreDisplayed}
        />
        <div>{displayed}</div>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(App)
