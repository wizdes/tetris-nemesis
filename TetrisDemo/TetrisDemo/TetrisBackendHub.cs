using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace TetrisDemo
{
    public class TetrisBackendHub : Hub
    {
        static readonly object _object = new object();

        private static List<string> waitingQueue = new List<string>();

        private static Dictionary<string, string> gameConnectionMapping = new Dictionary<string, string>();

        public void Send(string cid, string message)
        {
            // validate connectionId is valid
            lock (_object)
            {
                if (gameConnectionMapping.ContainsKey(Context.ConnectionId))
                {
                    // send data to endpoint at connectionId
                    var hubcontext = GlobalHost.ConnectionManager.GetHubContext<TetrisBackendHub>();
                    string connectionId = Context.ConnectionId;

                    hubcontext.Clients.Client(gameConnectionMapping[connectionId]).receiveMessage(message);
                }                
            }
        }

        public void NewGameRequest()
        {
            // get the connectionId
            string connectionId = Context.ConnectionId;
            lock (_object)
            {
            // check the waitingQueue; if there is one, then go for it
            if (waitingQueue.Count > 0 && !waitingQueue.Contains(connectionId))
            {
                // and remove them from the waitingQueue
                string waitingConnectionId = waitingQueue.ElementAt(0);
                waitingQueue.RemoveAt(0);

                if (!gameConnectionMapping.ContainsKey(connectionId) &&
                    !gameConnectionMapping.ContainsKey(waitingConnectionId))
                {
                    // and add them to activeGames
                    gameConnectionMapping.Add(connectionId, waitingConnectionId);
                    gameConnectionMapping.Add(waitingConnectionId, connectionId);                    
                }

                // send the clients the corresponding information
                var hubcontext = GlobalHost.ConnectionManager.GetHubContext<TetrisBackendHub>();
                hubcontext.Clients.Client(connectionId).startGame();
                hubcontext.Clients.Client(waitingConnectionId).startGame();
            }

            // else, do add to waitingQueue
            waitingQueue.Add(connectionId);                
            }
        }

        public void GameEnd()
        {
            // get the two connectionIds
            if (gameConnectionMapping.ContainsKey(Context.ConnectionId))
            {
                gameConnectionMapping.Remove(Context.ConnectionId);
            }

            if (waitingQueue.Contains(Context.ConnectionId))
            {
                waitingQueue.Remove(Context.ConnectionId);
            }
        }
    }
}