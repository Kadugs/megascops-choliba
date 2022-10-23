# Megascops Choliba

This is a League of Legends' skins collection API. These are the tables and methods available:

## Tables:
    players:
        id: INTEGER, PK
        uuid: VARCHAR(36), UNIQUE
        summoner_name: STRING
        username: STRING
        password: STRING
        created_at: DATETIME
    champions:
        id: INTEGER, PK
        uuid: VARCHAR(36), UNIQUE
        name: STRING
        created_at: DATETIME
    skins:
        id: INTEGER, PK
        uuid: VARCHAR(36), UNIQUE
        champion_id: INTEGER, FK
        skin_name: STRING
        tier: STRING
        created_at: DATETIME
    players_skins:
        id: INTEGER, PK
        uuid: VARCHAR(36), UNIQUE
        player_id: INTEGER, FK
        skin_id: INTEGER, FK
        created_at: DATETIME

## Associations:
    players:
        Has many: skins through players_skins (N:M)
    champions:
        Has many: skins (1:N)
    skins:
        Belongs to: champions (N:1)
        Belongs to many: players through players_skins (N:M)

## Routes:
### champions
    POST /api/champions
        Creates a new champion
        Params: name
        Returns: champion
    GET /api/champions => Returns all champions
    GET /api/champions/:uuid => Returns a champion by uuid
    GET /api/champions/:uuid/skins => Returns all skins of a champion by uuid

### skins
    POST /api/skins
        Creates a new skin
        Params: champion_id, skin_name, tier
        Returns: skin
    GET /api/skins => Returns all skins
    GET /api/skins/:uuid => Returns a skin by uuid

### players
    POST /api/players
        Creates a new player
        Params: summoner_name, username, password
        Returns: player
    GET /api/players => Returns all players
    GET /api/players/:uuid => Returns a player by uuid
    UPDATE /api/players/:uuid
        Updates a player
        Params: summoner_name, username, password
        Returns: player

### players_skins
    POST /api/player_skins
        Creates a new player skin
        Params: player_id, skin_id
        Returns: player_skin
    GET /api/player_skins => Returns all player skins
    GET /api/player_skins/player/:uuid => Returns all skins of a player by uuid
    GET /api/player_skins/skins/:uuid => Returns all players that owns a skin by uuid
    GET /api/player_skins/:uuid => Returns a player skin by uuid
    UPDATE /api/player_skins/:uuid
        Updates a player skin by uuid
        Params: player_id, skin_id
        Returns: player_skin
    DELETE /api/player_skins/:uuid => Deletes a player skin by uuid
    