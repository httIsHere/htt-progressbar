<template>
    <div class="progress" :style="style"></div>
</template>

<script>
const inBrowser = typeof window !== "undefined";
export default {
  name: "HttProgressbar",
  serverCacheKey: () => "Progress",
  computed: {
    style() {
      const _progress = this.progress;
      const _options = _progress.options
      const _isShow = !!_options.show
      const _location = _options.location
      const _style = {
          'background-color': _options.canSuccess ? _options.color : _options.failedColor,
          'opacity': _options.show ? 1 : 0,
          'position': _options.position
      }
      if (_location === 'top' || _location === 'bottom') {
          _location === 'top' ? _style.top = '0' : _style.bottom = '0'
          if (!_options.inverse) {
              _style.left = '0'
          } else {
              _style.right = '0'
          }
          _style.width = _progress.percent + '%'
          _style.height = _options.thickness
          _style.transition = (_isShow ? "width" + _options.transition.speed + ", " : "") + "opacity " + _options.transition.opacity
      } else if (_location === 'left' || _location === 'right'){
          _location === 'left' ? _style.left = '0' : _style.right = '0'
          if (!_options.inverse) {
              _style.bottom = '0'
          } else {
              _style.top = '0'
          }
          _style.width = _progress.percent + '%'
          _style.height = _options.thickness
          _style.transition = (_isShow ? "width" + _options.transition.speed + ", " : "") + "opacity " + _options.transition.opacity
      }
      return _style
    },
    progress() {
      if (inBrowser) {
        return window.HttProgressbarEventBus.RADON_LOADING_BAR;
      } else {
          return {
              percent: 0,
              options: {
                  canSuccess: true,
                  show: false,
                  color: 'rgb(19, 91, 55)',
                  failedColor: '#ef4949',
                  thickness: '2px',
                  transition: {
                      speed: '0.2s',
                      opacity: '0.6s',
                      termination: 300
                  },
                  location: 'top',
                  autoRevert: true,
                  inverse: false
              }
          }
      }
    }
  }
};
</script>

<style>
.progress{
    opacity: 1;
    z-index: 999999;
}
</style>
