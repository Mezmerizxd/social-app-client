// Classes
import Api from './Api';

class Debug {
    protected static instance: Debug;
    public static getInstance(): Debug {
        if (!Debug.instance) {
            Debug.instance = new Debug();
        }
        return Debug.instance;
    }

    public async User_GetFriends(): Promise<any> {
        const friends = await Api.POST('/debug/friends', {});
        if (friends && friends?.success) {
            if (friends.success === true) {
                return { success: true, friends: friends?.data };
            } else {
                return { success: false, error: friends?.errorMessage };
            }
        } else {
            return { success: false };
        }
    }

    public async User_GetChatRooms(): Promise<any> {
        const chatrooms = await Api.POST('/debug/chatrooms', {});
        if (chatrooms && chatrooms?.success) {
            if (chatrooms.success === true) {
                return { success: true, chatrooms: chatrooms?.data };
            } else {
                return { success: false, error: chatrooms?.errorMessage };
            }
        } else {
            return { success: false };
        }
    }
}

export default Debug;
