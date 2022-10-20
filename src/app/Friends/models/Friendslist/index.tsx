// Components
import Loading from '../../../components/Loading';

// Styles
import './styles.scss';

interface FriendProps {
    userId: number;
    username: string;
    avatar: string;
}

interface FriendslistProps {
    friends: FriendProps[];
    selectedFriend: number;
    func: (id: number) => void;
}

const Friendslist = ({ friends, selectedFriend, func }: FriendslistProps) => {
    return (
        <div className="Friendslist-container">
            <Loading name="friendslist" loading={friends ? false : true} />
            {friends &&
                friends.map((friend) => (
                    <div
                        className="Friend"
                        id={friend.username}
                        key={friend.userId}
                        onClick={() => func(friend.userId)}
                        style={
                            friend.userId && friend.userId === selectedFriend
                                ? {
                                      backgroundColor: '#292929',
                                      color: 'white',
                                  }
                                : {
                                      backgroundColor: '#1c1c1c',
                                  }
                        }
                    >
                        <img src={friend.avatar} alt={friend.username} />
                        <p>{friend.username}</p>
                    </div>
                ))}
        </div>
    );
};

export default Friendslist;
