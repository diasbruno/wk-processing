import asyncio
import websockets
import time

async def hello(websocket, path):
    print(path)
    name = await websocket.recv()
    print("< {}".format(name))

    while True:
        greeting = "Hello {}!".format(name)
        await websocket.send(greeting)
        print("> {}".format(greeting))
        time.sleep(1)


start_server = websockets.serve(hello, 'localhost', 8081)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()
