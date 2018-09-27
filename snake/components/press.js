import React, { Component } from 'react';
import {
  StyleSheet, View, Text, Image, TouchableOpacity, FlatList, ImageBackground,
} from 'react-native';
import FadeOutView from './FadeOutView';

class Press extends Component {
  constructor(props) {
    super(props);
    this.state = {
      snek_counter: 0,
      lifetime_snek_counter: 0,
      multiplierRate: 1.5,
      purchaseOptions: [
        {
          id: 0,
          num: 0,
          snekPoints: 10,
          title: 'Get Case Interview Secrets',
          countLabel: 'Books Purchased: ',
          rate: 1,
          background: 'https://images.gr-assets.com/books/1340744133l/15056959.jpg',
        },
        {
          id: 1,
          num: 0,
          snekPoints: 20,
          title: 'Attain WSO Senior Chimp Status',
          countLabel: 'Silver Bananas Attained: ',
          rate: 2,
          background: 'https://static1.squarespace.com/static/53adf1a4e4b07a4f011714d8/57c10cb92994ca2851619b9f/57eff43d725e25e9149ec2e4/1475343421903/Wall+Street+Oasis.jpg?format=1000w',
        },
        {
          id: 2,
          num: 0,
          snekPoints: 500,
          title: 'Sabotage Interview of "Friend"',
          countLabel: 'Friends Sabotaged: ',
          rate: 50,
          background: 'https://image.shutterstock.com/image-vector/rejected-red-square-grunge-stamp-260nw-335102924.jpg',
        },
        {
          id: 3,
          num: 0,
          snekPoints: 10000,
          title: 'Become Two Year IB Veteran',
          countLabel: 'Live Deals Done: ',
          rate: 500,
          background: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/200px-Goldman_Sachs.svg.png',
        },
        {
          id: 4,
          num: 0,
          snekPoints: 100000,
          title: 'Securitize a Snek Farm',
          countLabel: 'Snek Farms: ',
          rate: 5000,
          background: 'https://www.businessdayonline.com/wp-content/uploads/2016/12/snake_farm.jpg',
        },
        {
          id: 5,
          num: 0,
          snekPoints: 500000,
          title: 'Party with DJ Sol',
          countLabel: 'Parties: ',
          rate: 10000,
          background: 'https://nyppagesix.files.wordpress.com/2018/07/dj-goldman-saks.jpg?quality=90&strip=all&w=618&h=410&crop=1',
        },
        {
          id: 6,
          num: 0,
          snekPoints: 1000000,
          title: 'Insider Trade with Stevey',
          countLabel: 'Insider Trades: ',
          rate: 25000,
          background: 'https://image.shutterstock.com/image-vector/vector-illustration-cartoon-thief-260nw-130235285.jpg',
        },
        {
          id: 7,
          num: 0,
          snekPoints: 12500000,
          title: 'Make Markets with Ken',
          countLabel: 'Markets Made: ',
          rate: 100000,
          background: 'https://s3.amazonaws.com/lowres.cartoonstock.com/food-drink-biblical-feeding_of_the_5000-bread-fish-feed_the_5000-jlo0174_low.jpg',
        },
        {
          id: 8,
          num: 0,
          snekPoints: 50000000,
          title: 'Crash Economy with MBSs',
          countLabel: 'Economies Crashed: ',
          rate: 1000000,
          background: 'http://www.internationalinvestment.net/wp-content/uploads/2016/04/MBS-image-740x360.jpg',
        },
        {
          id: 9,
          num: 0,
          snekPoints: 10000000000,
          title: 'Rig Presidency with Bob Mercer',
          countLabel: 'Presidencies Rigged: ',
          rate: 100000000,
          background: 'https://betanews.com/wp-content/uploads/2017/06/cartoon-trump-flag-600x375.jpg',
        },
      ],
      clicked: false,
    };
    this.getNumAbbreviation = this.getNumAbbreviation.bind(this);
    this._onPressCounter = this._onPressCounter.bind(this);
    this._onPressRewards = this._onPressRewards.bind(this);
    this.renderItem = this.renderItem.bind(this);

    // interval at which numbers get refreshed
    const interval = 150;

    // Toggle the state every second
    setInterval(() => {
      const {
        purchaseOptions,
      } = this.state;

      const caseAdd = (1 * purchaseOptions[0].num);
      const chimpAdd = (2 * purchaseOptions[1].num);
      const sabotageAdd = (50 * purchaseOptions[2].num);
      const ibvetAdd = (500 * purchaseOptions[3].num);
      const securitizeAdd = (5000 * purchaseOptions[4].num);
      const djsolAdd = (10000 * purchaseOptions[5].num);
      const insidertradeAdd = (25000 * purchaseOptions[6].num);
      const makemarketAdd = (100000 * purchaseOptions[7].num);
      const mbsAdd = (1000000 * purchaseOptions[8].num);
      const mercerAdd = (100000000 * purchaseOptions[9].num);
      const sumAdd = (caseAdd + chimpAdd + sabotageAdd + ibvetAdd + securitizeAdd + djsolAdd + insidertradeAdd + makemarketAdd + mbsAdd + mercerAdd) / (1000 / interval);

      this.setState((previousState) => {
        return { snek_counter: previousState.snek_counter + sumAdd, lifetime_snek_counter: previousState.lifetime_snek_counter + sumAdd, clicked: false };
      });
    }, interval);
  }

  getNumAbbreviation(num, decDigits) {
    if (num < 1000) {
      return num.toFixed(0);
    } else if (num < 1000000) {
      return `${(num / 1000).toFixed(decDigits)} thousand`;
    } else if (num < 1000000000) {
      return `${(num / 1000000).toFixed(decDigits)} million`;
    } else if (num < 1000000000000) {
      return `${(num / 1000000000).toFixed(decDigits)} billion`;
    } else if (num < 1000000000000000) {
      return `${(num / 1000000000000).toFixed(decDigits)} trillion`;
    } else if (num < 1000000000000000000) {
      return `${(num / 1000000000000000).toFixed(decDigits)} quadrillion`;
    } else if (num < 1000000000000000000000) {
      return `${(num / 1000000000000000000).toFixed(decDigits)} quintillion`;
    } else if (num < 1000000000000000000000000) {
      return `${(num / 1000000000000000000000).toFixed(decDigits)} sextillion`;
    } else if (num < 1000000000000000000000000000) {
      return `${(num / 1000000000000000000000000).toFixed(decDigits)} septillion`;
    } else if (num < 1000000000000000000000000000000) {
      return `${(num / 1000000000000000000000000000).toFixed(decDigits)} octillion`;
    } else if (num < 1000000000000000000000000000000000) {
      return `${(num / 1000000000000000000000000000000).toFixed(decDigits)} nonillion`;
    } else if (num < 1000000000000000000000000000000000000) {
      return `${(num / 1000000000000000000000000000000000).toFixed(decDigits)} decillion`;
    } else {
      return 'Too many';
    }
  }

  _onPressCounter() {
    this.setState(prevState => ({ snek_counter: prevState.snek_counter + 1, lifetime_snek_counter: prevState.lifetime_snek_counter + 1, clicked: true }));
  }

  _onPressRewards(item) {
    const { multiplierRate, snek_counter } = this.state;

    if (snek_counter >= item.snekPoints * (multiplierRate ** item.num)) {
      const { purchaseOptions } = this.state;
      purchaseOptions[item.id].num += 1;
      this.setState(prevState => ({ purchaseOptions, snek_counter: prevState.snek_counter - item.snekPoints * (prevState.multiplierRate ** (item.num - 1)), snek_rewards: [] }));
    }
  }

  renderItem(item) {
    const { multiplierRate, snek_counter } = this.state;

    let titleStyle = styles.item;
    let statsStyle = styles.statsitem;
    if (snek_counter < item.snekPoints * (multiplierRate ** item.num)) {
      titleStyle = styles.itemGray;
      statsStyle = styles.statsitemGray;
    }
    return (
      <ImageBackground source={{ uri: item.background }}
        style={{
          width: '100%', height: '100%', flex: 1,
        }}
        resizeMode="repeat"
      >
        <View style={styles.listcontainer}>
          <Text style={titleStyle}>{item.title}</Text>
          <View style={styles.statscontainer}>
            <Text style={statsStyle}>
              {'Sneks: '}
              {this.getNumAbbreviation(item.snekPoints * (multiplierRate ** item.num), 3)}
            </Text>
            <Text style={statsStyle}>
              {'Rate (sneks/s): '}
              {this.getNumAbbreviation(item.rate, 3)}
            </Text>
            <Text style={statsStyle}>{item.countLabel + this.getNumAbbreviation(item.num, 3)}</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }

  render() {
    /** Refactor This * */
    const {
      snek_counter,
      lifetime_snek_counter,
      purchaseOptions,
      clicked,
    } = this.state;

    let displayPurchaseOptions = [];
    let currentSnekRate = 0;
    for (let i = 0; i < purchaseOptions.length; i++) {
      if (purchaseOptions[i].num > 0 || purchaseOptions[i].snekPoints <= lifetime_snek_counter) {
        displayPurchaseOptions = displayPurchaseOptions.concat(purchaseOptions[i]);
      }
      currentSnekRate += purchaseOptions[i].num * purchaseOptions[i].rate;
    }

    const snakeX = Math.random() * 60 + 20;
    const snakeY = Math.random() * 60 + 20;
    const snakeXString = `${parseInt(snakeX, 10)}%`;
    const snakeYString = `${parseInt(snakeY, 10)}%`;

    let clickAnimation = '';
    if (clicked) {
      clickAnimation = (
        <FadeOutView style={{
          position: 'absolute',
          bottom: snakeXString,
          right: snakeYString,
          width: 50,
          height: 50,
        }}
        >
          <Image
            style={{ width: 75, height: 75 }}
            source={require('../assets/snake.png')}
            resizeMode="contain"
          />
        </FadeOutView>
      );
      // this.setState(prevState => ({ clicked: false }));
    }

    return (

      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={this._onPressCounter}>
            <Image
              style={styles.image}
              source={{ uri: 'http://www.acting-man.com/blog/media/2017/01/donadoll-1024x429.jpg' }}
            />
          </TouchableOpacity>
          {clickAnimation}
        </View>

        <View style={styles.countercontainer}>
          <Text style={styles.counter}>
            Snekiness:
            {' '}
            {this.getNumAbbreviation(snek_counter, 3)}
          </Text>
          <Text style={styles.counterstats}>
            {this.getNumAbbreviation(currentSnekRate, 3)}
            {currentSnekRate === 1 ? ' snek per second' : ' sneks per second'}
          </Text>
        </View>

        <ImageBackground source={{ uri: 'http://snake-cartoon-images.clipartonline.net/_/rsrc/1467889959504/home/cartoon-snake_6.png?height=320&width=320' }} style={{ width: '100%', height: '100%', flex: 1 }}>
          <View style={styles.flatlist}>
            <FlatList
              data={displayPurchaseOptions}
              style={styles.listcontainer}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => this._onPressRewards(item)}>
                  {this.renderItem(item)}
                </TouchableOpacity>
              )}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30,
  },

  counter: {
    fontWeight: 'bold',
    fontSize: 25,
  },

  counterstats: {
    fontSize: 20,
  },

  listcontainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgba(255,255,255,.88)',
  },

  countercontainer: {
    flexDirection: 'column',
  },

  image: {
    width: 400,
    height: 300,
  },

  flatlist: {
    // alignSelf: 'stretch',
    marginLeft: 0,
    paddingRight: 0,
    flex: 1,
    flexDirection: 'column',
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },

  statscontainer: {
    flex: 1,
    flexDirection: 'row',
  },

  statsitem: {
    fontSize: 12,
    paddingLeft: 10,
  },

  itemGray: {
    color: 'rgb(160, 160, 160)',
    padding: 10,
    fontSize: 18,
    height: 44,
    flex: 1,
    flexWrap: 'wrap',
    fontWeight: 'bold',
  },

  statsitemGray: {
    color: 'rgb(160, 160, 160)',
    fontSize: 12,
    paddingLeft: 10,
  },

});

export default Press;
