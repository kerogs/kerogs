# Write to the console after creating the private part.
start before a private cs2 server

## basic configuration + bunny hop
This setup adjusts game settings for extended buy times, respawn mechanics, unlimited money, bunnyhopping, and general gameplay optimizations.
```sh
mp_buytime 9999; mp_buy_anywhere 1; mp_roundtime 60; mp_roundtime_defuse 60; mp_roundtime_hostage 60; mp_timelimit 0; mp_respawn_on_death_ct 1; mp_respawn_on_death_t 1; mp_respawnwavetime_ct 3; mp_respawnwavetime_t 3; sv_autobunnyhopping 1; sv_enablebunnyhopping 1; sv_staminamax 0; sv_staminajumpcost 0; sv_staminalandcost 0; mp_freezetime 0; mp_restartgame 1; mp_warmup_end; sv_cheats 1; mp_limitteams 0; mp_autoteambalance 0; mp_maxmoney 65535; mp_startmoney 65535; mp_afterroundmoney 65535; mp_autokick 0
```

## basic conf + 100% precision
Adds recoil and accuracy adjustments for maximum weapon precision to the basic configuration.
```sh
mp_buytime 9999; mp_buy_anywhere 1; mp_roundtime 60; mp_roundtime_defuse 60; mp_roundtime_hostage 60; mp_timelimit 0; mp_respawn_on_death_ct 1; mp_respawn_on_death_t 1; mp_respawnwavetime_ct 3; mp_respawnwavetime_t 3; sv_autobunnyhopping 1; sv_enablebunnyhopping 1; sv_staminamax 0; sv_staminajumpcost 0; sv_staminalandcost 0; mp_freezetime 0; mp_restartgame 1; mp_warmup_end; sv_cheats 1; mp_limitteams 0; mp_autoteambalance 0; mp_maxmoney 65535; mp_startmoney 65535; mp_afterroundmoney 65535; mp_autokick 0; weapon_accuracy_shot_penalty 0; weapon_recoil_decay1_exp 99999; weapon_recoil_decay2_exp 99999; weapon_recoil_decay2_lin 99999; weapon_recoil_scale 0; weapon_recoil_suppression_shots 500
```

## normal + 100% precision + bunnyhop 
Simplified setup for enabling bunnyhopping and ensuring maximum weapon precision.
```sh
sv_autobunnyhopping 1; sv_enablebunnyhopping 1; sv_staminamax 0; sv_staminajumpcost 0; sv_staminalandcost 0; mp_autokick 0; weapon_accuracy_nospread 1; mp_restartgame 1
```