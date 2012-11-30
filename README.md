# Octocarina of time

![](https://raw.github.com/Octocarina/game-off-2012/master/img/README/octocat-link-small.png) 

### Click [here](http://gelisam.com/octocarina) to play!

![](https://raw.github.com/Octocarina/game-off-2012/master/img/README/screenshot1.png) ![](https://raw.github.com/Octocarina/game-off-2012/master/img/README/screenshot2.png) 

The game is self-contained; you don't need to read any of the explanations below to figure out how to play.

If you get stuck, it might help to read the sections below.


## Game mechanic: Revert changes, replay changes

This is a puzzle game in which you carry a fork, push blocks, and go back in time.

In git-speak, the Master Fork allows you to work on a tempory branch, to cherry-pick a subset of the block pushes you perform inside that branch, then to rebase those changes onto the master branch. In plain-English-speak, see below.


## What does the fork do??

If you are having a hard time understanding what the fork does, don't worry, you're not alone! Not being able to understand what the fork does was such a frequent occurence with beta testers that a majority of the development time had to be dedicated to making the mechanic easier to understand.

In short, the fork rolls back all actions performed since the fork was stabbed, then replays those actions which affected the stabbed block. Let's go through an example level.

1.  Fork the block.  
    ![](https://raw.github.com/Octocarina/game-off-2012/master/img/README/explanation1.png)
1.  Push a few blocks as illustrated. This blocks the door, but don't worry, this is going to get reverted.  
    ![](https://raw.github.com/Octocarina/game-off-2012/master/img/README/explanation2.png)
1.  Pick up the fork. All the blocks rewind to the position they had in step 1...  
    ![](https://raw.github.com/Octocarina/game-off-2012/master/img/README/explanation3.png)
1.  ...and then the forked block repeats its movements.  
    ![](https://raw.github.com/Octocarina/game-off-2012/master/img/README/explanation4.png)
1.  The blocks are now in a much better arrangement, allowing you to leave the room!  
    ![](https://raw.github.com/Octocarina/game-off-2012/master/img/README/explanation5.png)


## Art Credits

I am using PlanetCute, a [free tileset](http://www.lostgarden.com/2007/05/dancs-miraculously-flexible-game.html) generously offered by Daniel Cook for the express purpose of *not* making yet another Sokoban clone. Which this game kind of is, before you start using the Master Fork. Sorry, Danc! Anyway, [his blog](http://www.lostgarden.com/) is a great source of insight for independent games developers.

I also borrow a character from <a href="http://doctor-gus.deviantart.com/">Doctor-Gus</a>, an artist who makes jewelry out of forks. But I can't tell you which character without spoiling the ending.
